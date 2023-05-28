import CourseCard from "../../components/CourseCard/CourseCard"
import PriceFilter from "../../components/PriceFilter/PriceFilter"
import SideBarBox from "../SideBarBox/SideBarBox"
import SortSection from "../SortSection/SortSection"
import Pagination from "../Pagination/pagination"
import AdvertisingGIF from "../../Assets/bonrailco-1.gif"
import { useSelector } from "react-redux"
import { getCategories, getCourses } from "../../App/Slices/Courses"
import { Link, useParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"

const CoursesSectionWithFiltering = () => {
    const RawCourses = useSelector(getCourses)
    const AllCategories = useSelector(getCategories)
    const { Category_Name } = useParams()
    const [FilteredCourses, setFilteredCourses] = useState<T_Course[]>(RawCourses)
    const [priceRange, setPriceRange] = useState<T_PriceRange>({
        min: "0",
        max: "0",
    })
    const [highestPrice, sethighestPrice] = useState<number>(0)
    const [SliceCourseOption, setSliceCourseOption] = useState<T_SliceCourseOption>({
        lastIndex: -1,
        coursePerPage: FilteredCourses.length,
    })
    // filterThecourseBy Category_Name
    useEffect(() => {
        if (Category_Name === "All") {
            setFilteredCourses(RawCourses)
            return
        }
        const filteredByNamecategory = RawCourses.slice().filter(course => course.categoryName === Category_Name)
        setFilteredCourses(filteredByNamecategory)
    }, [RawCourses, Category_Name])

    // Find the highest Price of courses to show in the filrPrcieComponent
    const highestPriceResult = useMemo(() => {
        return FilteredCourses.reduce((prv, crnt) => (prv.price > crnt.price ? prv : crnt)).price
    }, [FilteredCourses])

    // only if the highest priceResult changed setState (setPriceRange,setHighestPrice)
    useEffect(() => {
        setPriceRange({
            min: String(0),
            max: String(highestPriceResult),
        })
        sethighestPrice(highestPriceResult)
    }, [highestPriceResult])

    const _sortHandler = (sortOption: T_SortOption) => {
        if (!sortOption) {
            const NewFilteredList = FilteredCourses.slice().sort(() => Math.random() - 0.5)
            setFilteredCourses(NewFilteredList)
        }
        if (sortOption === "Cheap") {
            const NewFilteredList = FilteredCourses.slice().sort((a, b) => a.price - b.price)
            setFilteredCourses(NewFilteredList)
        }
        if (sortOption === "Expensive") {
            const NewFilteredList = FilteredCourses.slice().sort((a, b) => a.price - b.price)
            setFilteredCourses(NewFilteredList.reverse())
        }
    }

    return (
        <div className='CoursesSectionWithFiltering container px-2 md:px-0'>
            <SortSection _sortHandler={_sortHandler} />
            <div className='courses-sideBar flex flex-col md:flex-row'>
                <div className='courses-container md:flex-1'>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-16 py-8 bml:grid-cols-2 xl:grid-cols-3'>
                        {FilteredCourses.filter(({ price }) => {
                            const { min, max } = priceRange
                            if (price < Number(min) || price > Number(max)) {
                                return false
                            }
                            return true
                        })
                            .slice(SliceCourseOption.lastIndex - SliceCourseOption.coursePerPage, SliceCourseOption.lastIndex)
                            .map((couresObj, index) => (
                                <CourseCard
                                    key={index}
                                    {...couresObj}
                                />
                            ))}
                    </div>
                    <Pagination
                        setSliceCourseOption={setSliceCourseOption}
                        FilteredCourses={FilteredCourses}
                        priceRange={priceRange}
                    />
                </div>
                <div className='sidebar mt-12 flex flex-col gap-6 md:mt-0 md:w-[300px] md:pr-5 lg:w-[320px]'>
                    <SideBarBox title='فیلتر براساس قیمت'>
                        <PriceFilter
                            _FillterPriceHandler={setPriceRange}
                            highestPrice={highestPrice}
                        />
                    </SideBarBox>
                    <SideBarBox title='دسته بندی محصولات'>
                        <ul className=' flex flex-col'>
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
                                                    "group h-9 cursor-pointer border-b border-b-lightFourthWhite dark:border-b-darkThirdBlack"
                                                }
                                            >
                                                <div className='flex h-9 items-center justify-between border-r-main px-2 leading-9 text-lightWhite transition-all duration-500 ease-out group-hover:border-r-[6px]'>
                                                    <p className='my-auto text-xs text-FifthGray dark:text-SecondaryGray lg:text-sm'>
                                                        {category.title}
                                                    </p>
                                                    <span className='flex aspect-square w-4 select-none items-center justify-center rounded-full bg-main px-[10px] pt-[3px] text-xs lg:w-5'>
                                                        {category.courses.length}
                                                    </span>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                })
                            }, [AllCategories, Category_Name])}
                            {Category_Name === "All" ? null : (
                                <Link to={"/Categories/All"}>
                                    <li className={"group mb-3 cursor-pointer"}>
                                        <div className='flex h-9 items-center justify-between border-r-main px-2 leading-9 text-lightWhite transition-all duration-500 ease-out group-hover:border-r-[6px]'>
                                            <p className='my-auto text-xs text-FifthGray dark:text-SecondaryGray lg:text-sm'>
                                                همه دسته بندی ها
                                            </p>
                                            <span className='flex aspect-square w-4 select-none items-center justify-center rounded-full bg-main px-[10px] pt-[3px] text-xs lg:w-5'>
                                                {RawCourses.length}
                                            </span>
                                        </div>
                                    </li>
                                </Link>
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
