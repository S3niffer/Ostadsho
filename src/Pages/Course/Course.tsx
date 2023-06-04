import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCourse } from "../../App/Slices/Courses"
import { useEffect, useState } from "react"
import Header from "../../Layouts/Header/Header"
import Footer from "../../Layouts/Footer/Footer"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import BreadCrumb from "../../Layouts/BreadCrumb/BreadCrumb"
import CourseTopPage from "../../Layouts/CourseTopPage/CourseTopPage"
import InstructorSection from "../../Layouts/InstructorSection/InstructorSection"
import { getCategory } from "../../App/Slices/Courses"
import RelatedCoursesComponent from "../../Layouts/RelatedCoursesComponent/RelatedCoursesComponent"
import CourseTopicsSection from "../../Layouts/CourseTopicsSection/CourseTopicsSection"

const Course = () => {
    const { Category_Name, Course_Name } = useParams()
    const Course = useSelector((state: RootState) => getCourse(state, Category_Name!, Course_Name!))
    const Category = useSelector((state: RootState) => getCategory(state, Category_Name!))

    if (Course) {
        return (
            <div className='coursePage'>
                <Header />
                <BreadCrumb mainCourse={Course} />
                <CourseTopPage Course={Course} />
                <CourseTopicsSection chapters={Course.chapters!} />
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
