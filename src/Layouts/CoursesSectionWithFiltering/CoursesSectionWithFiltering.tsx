import CourseCard from "../../components/CourseCard/CourseCard"
import PriceFilter from "../../components/PriceFilter/PriceFilter"
import SideBarBox from "../SideBarBox/SideBarBox"
import SortSection from "../SortSection/SortSection"
import Pagination from "../Pagination/pagination"
import AdvertisingGIF from "../../Assets/bonrailco-1.gif"
import { useSelector } from "react-redux"
import { getCategories, getCourses } from "../../App/Slices/Courses"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useMemo, useReducer } from "react"

const initialStater: T_InitialStater = (courses, PageNumber) => {
    return {
        priceRange: {
            min: "0",
            max: "0",
        },
        paginationDetails: {
            itemsCount: 3,
            lastIndex: -1,
            status: PageNumber ? true : false,
        },
        sortOrder: "noOrder",
        categoryCourses: courses,
    }
}

const Reducer: T_Reducer = (state, action) => {
    const { type } = action
    switch (type) {
        case "SET_PriceRange": {
            return { ...state, priceRange: action.payload }
        }
        case "SET_SortOption": {
            return { ...state, sortOrder: action.payload }
        }
        case "SET_LastIndex": {
            return { ...state, paginationDetails: { ...state.paginationDetails, lastIndex: action.payload } }
        }
        case "UPDATE_PaginateStatus": {
            if (action.payload) {
                return { ...state, paginationDetails: { ...state.paginationDetails, status: action.payload } }
            } else {
                return { ...state, paginationDetails: { ...state.paginationDetails, lastIndex: -1, status: action.payload } }
            }
        }
        case "UPDATE_CategoryCourses": {
            return { ...state, categoryCourses: action.payload }
        }
        case "RESET_Pagination": {
            return { ...state, paginationDetails: { lastIndex: -1, status: false, itemsCount: 3 } }
        }
        default: {
            return state
        }
    }
}

const CoursesSectionWithFiltering = () => {
    const RawCourses = useSelector(getCourses)
    const AllCategories = useSelector(getCategories)
    const { Category_Name, PageNumber } = useParams()
    const Navigate = useNavigate()
    const [state, Dispatch] = useReducer(Reducer, initialStater(RawCourses, +PageNumber!))

    // prevent bug in pagination
    useEffect(() => {
        if (!PageNumber) return
        if (isNaN(+PageNumber)) Navigate(`/categories/${Category_Name}`)
    }, [PageNumber])

    // Update categoryCourses
    useEffect(() => {
        if (state.categoryCourses.length === 0) return
        let Result: T_Course[]
        if (Category_Name !== "All") {
            Result = RawCourses.filter(({ categoryName }) => Category_Name === categoryName)
        } else {
            Result = RawCourses
        }
        if (Result !== state.categoryCourses) {
            Dispatch({ type: "UPDATE_CategoryCourses", payload: Result })
        }
    }, [Category_Name, RawCourses])

    const highestPrice = useMemo(() => {
        if (state.categoryCourses.length === 0) return 0
        const result = state.categoryCourses?.reduce((Prv, Crnt) => (Prv.price > Crnt.price ? Prv : Crnt)).price
        Dispatch({ type: "SET_PriceRange", payload: { min: "0", max: String(result) } })
        return result
    }, [state.categoryCourses])

    const filteredByPrice = useMemo(() => {
        const { min, max } = state.priceRange

        const filtered = state.categoryCourses?.filter(({ price }) => (price > +max || price < +min ? false : true))
        if (state.sortOrder === "noOrder") {
            return filtered
        } else if (state.sortOrder === "Cheap") {
            return filtered?.sort(({ price: a }, { price: b }) => a - b)
        } else {
            return filtered?.sort(({ price: a }, { price: b }) => b - a)
        }
    }, [state.sortOrder, state.priceRange])

    const paginateCourses = useMemo(() => {
        if (filteredByPrice?.length === 0) return []
        const { lastIndex, itemsCount } = state.paginationDetails
        if (lastIndex === -1) return filteredByPrice
        return filteredByPrice?.slice(lastIndex - itemsCount, lastIndex)
    }, [state.paginationDetails.lastIndex, filteredByPrice])

    // prevent conflict (PriceFiltering & pagination)
    useEffect(() => {
        if (filteredByPrice.length !== 0 && paginateCourses.length === 0) {
            Navigate(`/categories/${Category_Name}/1`)
        }
    }, [filteredByPrice, paginateCourses])

    // reset url after turn off paginate
    useEffect(() => {
        if (state.paginationDetails.status) return

        Navigate(`/categories/${Category_Name}`)
    }, [state.paginationDetails.status])

    // rest pagination after changed Category if its active
    useEffect(() => {
        if (!(state.paginationDetails.lastIndex === -1) && !state.paginationDetails.status) return

        Dispatch({ type: "RESET_Pagination" })
    }, [Category_Name])

    return (
        <div className='CoursesSectionWithFiltering container mb-12 px-2 md:px-0'>
            {useMemo(
                () => (
                    <SortSection
                        Dispatch={Dispatch}
                        paginate={state.paginationDetails.status}
                        sortOrder={state.sortOrder}
                    />
                ),
                [state.paginationDetails.status, state.sortOrder]
            )}
            <div className='courses-sideBar flex flex-col md:flex-row'>
                <div className='courses-container md:flex-1'>
                    {filteredByPrice.length === 0 ? (
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <div className='lds-heart'>
                                <div></div>
                            </div>
                            <p className='w-56 text-justify font-RokhFaNumBold text-xl'>
                                عی بابا مثل اینکه تموم شد قصه نخور دفعه بعدی میاریم
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className='grid grid-cols-1 gap-x-4 gap-y-16 pt-8 bml:grid-cols-2 xl:grid-cols-3'>
                                {useMemo(
                                    () =>
                                        paginateCourses.map((couresObj, index) => (
                                            <CourseCard
                                                key={index}
                                                {...couresObj}
                                            />
                                        )),
                                    [paginateCourses]
                                )}
                            </div>

                            {state.paginationDetails.status && filteredByPrice.length > state.paginationDetails.itemsCount ? (
                                <Pagination
                                    items={filteredByPrice}
                                    itemsCount={state.paginationDetails.itemsCount}
                                    Dispatch={Dispatch}
                                />
                            ) : null}
                        </>
                    )}
                </div>

                <div className='sidebar mt-12 flex flex-col gap-6 md:mt-0 md:w-[300px] md:pr-5 lg:w-[320px]'>
                    <SideBarBox title='فیلتر براساس قیمت'>
                        {useMemo(
                            () => (
                                <PriceFilter
                                    Dispatch={Dispatch}
                                    highestPrice={highestPrice}
                                />
                            ),
                            [highestPrice]
                        )}
                    </SideBarBox>
                    <SideBarBox title='دسته بندی محصولات'>
                        <ul className=' flex flex-col pb-3'>
                            {useMemo(() => {
                                return AllCategories.map(category => {
                                    if (Category_Name === category.categoryName) return null
                                    return (
                                        <Link
                                            key={category.id}
                                            to={"/categories/" + category.categoryName}
                                        >
                                            <li
                                                className={
                                                    "group h-9 cursor-pointer border-t border-t-lightFourthWhite dark:border-t-darkThirdBlack"
                                                }
                                            >
                                                <div className='flex h-9 items-center justify-between border-r-main px-2 leading-9 text-lightWhite transition-all duration-500 ease-out group-hover:border-r-[6px]'>
                                                    <p className='my-auto text-sm text-FifthGray dark:text-SecondaryGray lg:text-[15px]'>
                                                        {category.title}
                                                    </p>
                                                    <span className='flex aspect-square w-4 select-none items-center justify-center rounded-full bg-main px-[12px] pt-[3px] text-sm lg:w-5'>
                                                        {category.courses.length}
                                                    </span>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                })
                            }, [AllCategories, Category_Name])}

                            {useMemo(
                                () =>
                                    Category_Name === "All" ? null : (
                                        <Link to={"/categories/All"}>
                                            <li
                                                className={
                                                    "group cursor-pointer border-t border-t-lightFourthWhite dark:border-t-darkThirdBlack"
                                                }
                                            >
                                                <div className='flex h-9 items-center justify-between border-r-main px-2 leading-9 text-lightWhite transition-all duration-500 ease-out group-hover:border-r-[6px]'>
                                                    <p className='my-auto text-xs text-FifthGray dark:text-SecondaryGray lg:text-sm'>
                                                        همه دسته بندی ها
                                                    </p>
                                                    <span className='flex aspect-square w-4 select-none items-center justify-center rounded-full bg-main px-[12px] pt-[3px] text-sm lg:w-5'>
                                                        {RawCourses.length}
                                                    </span>
                                                </div>
                                            </li>
                                        </Link>
                                    ),
                                [Category_Name]
                            )}
                        </ul>
                    </SideBarBox>
                    <SideBarBox
                        title='تبلیغات'
                        sticky
                    >
                        <div className='p-4'>
                            <img
                                className='mx-auto rounded-md'
                                src={AdvertisingGIF}
                                alt='Advertising'
                            />
                        </div>
                    </SideBarBox>
                </div>
            </div>
        </div>
    )
}
export default CoursesSectionWithFiltering
