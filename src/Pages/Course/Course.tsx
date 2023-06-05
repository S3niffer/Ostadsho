import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCourse } from "../../App/Slices/Courses"
import { useEffect, useMemo, useState } from "react"
import Header from "../../Layouts/Header/Header"
import Footer from "../../Layouts/Footer/Footer"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import BreadCrumb from "../../Layouts/BreadCrumb/BreadCrumb"
import CourseTopPage from "../../Layouts/CourseTopPage/CourseTopPage"
import InstructorSection from "../../Layouts/InstructorSection/InstructorSection"
import { getCategory } from "../../App/Slices/Courses"
import RelatedCoursesComponent from "../../Layouts/RelatedCoursesComponent/RelatedCoursesComponent"
import CourseTopicsSection from "../../Layouts/CourseTopicsSection/CourseTopicsSection"
import { getBoughtCourses } from "../../App/Slices/Bought"
import { getBasketCourses } from "../../App/Slices/Basket"

const Course = () => {
    const { Category_Name, Course_Name } = useParams()
    const Course = useSelector((state: RootState) => getCourse(state, Category_Name!, Course_Name!))
    const Category = useSelector((state: RootState) => getCategory(state, Category_Name!))
    const BasketCourses = useSelector(getBasketCourses)
    const BoughtCourses = useSelector(getBoughtCourses)
    const Dispatch = useDispatch()
    const [isBought, setIsBought] = useState(false)

    const isInTheBasket = useMemo(() => {
        return BasketCourses.find(({ courseName }) => Course!.courseName === courseName)
    }, [BasketCourses, Course, Course_Name])

    useEffect(() => {
        if (BoughtCourses.length === 0) return

        const Find = BoughtCourses.find(Name => Name === Course_Name)

        if (Find) {
            setIsBought(true)
        } else {
            isBought && setIsBought(false)
        }
    }, [BoughtCourses, Category_Name, Course_Name])
    if (Course) {
        return (
            <div className='coursePage'>
                <Header />
                <BreadCrumb mainCourse={Course} />
                <CourseTopPage
                    Course={Course}
                    isBought={isBought}
                    isInTheBasket={isInTheBasket}
                    Dispatch={Dispatch}
                />
                <CourseTopicsSection
                    chapters={Course.chapters!}
                    isBought={isBought}
                    Course={Course}
                    isInTheBasket={isInTheBasket}
                    Dispatch={Dispatch}
                />
                <div className='container mb-10 flex flex-col gap-3 px-2 md:px-0 lg:flex-row'>
                    <InstructorSection
                        instructor={Course.instructorName!}
                        className='flex-[.55] rounded-md bg-lightThirdWhite p-5 dark:bg-darkFourthBlack'
                    />
                    <RelatedCoursesComponent
                        Category={Category!}
                        Category_Name={Category_Name!}
                        courseName={Course.courseName}
                    />
                </div>
                <Footer dynamicDepart='E_NAMAD'>
                    <GreenTopFooter />
                </Footer>
            </div>
        )
    } else {
        return <CoutrseNotFound />
    }
}
export default Course

const CoutrseNotFound = () => {
    const [timer, setTimer] = useState(5)
    const Navigate = useNavigate()

    useEffect(() => {
        const decreaseTime = setInterval(() => {
            if (timer !== 1) {
                setTimer(prv => --prv)
            } else {
                clearInterval(decreaseTime)
                Navigate("/")
            }
        }, 1000)
        return () => clearInterval(decreaseTime)
    }, [timer])

    return (
        <div className='flex h-screen flex-col items-center justify-center dark:bg-darkBlack dark:text-lightSecondaryWhite'>
            <h2 className='py-2 text-center text-2xl'>متاسفم صفحه مورد نظر یافت نشد</h2>
            <p className='text-center text-lg'>{timer}</p>
            <p className='text-center text-xl'>تا انتقال یافتن به صفحه اصلی</p>
        </div>
    )
}
