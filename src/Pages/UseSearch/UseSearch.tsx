import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../Layouts/Footer/Footer"
import Header from "../../Layouts/Header/Header"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getCourses } from "../../App/Slices/Courses"
import CourseCard from "../../components/CourseCard/CourseCard"

const UseSearch = () => {
    const { search } = useLocation()
    const Courses = useSelector(getCourses)
    const [searchCourses, setsearchCourses] = useState<T_Course[]>([] as T_Course[])

    useEffect(() => {
        if (!search) return
        const Values = search.slice(1).split("+")
        let findCourses = []

        for (let i = 0; i < Values.length; ++i) {
            const Result = Courses.filter(course => {
                if (Values[i].includes("%")) {
                    const value = decodeURIComponent(Values[i])
                    if (/^[A-Za-z]+$/.test(value)) {
                        return (
                            course.courseName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
                            course.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                        )
                    } else {
                        return course.title.includes(value)
                    }
                } else {
                    if (/^[A-Za-z]+$/.test(Values[0])) {
                        return (
                            course.courseName.toLocaleLowerCase().includes(Values[i].toLocaleLowerCase()) ||
                            course.title.toLocaleLowerCase().includes(Values[i].toLocaleLowerCase())
                        )
                    } else {
                        return course.title.includes(Values[i])
                    }
                }
            })
            if (Result.length === 0) continue
            findCourses.push(...Result)
        }

        setsearchCourses(findCourses)
    }, [search, Courses])

    return (
        <div className='UserCourses'>
            <Header shadow />
            <div className='container px-2 py-10 md:px-0'>
                <div>
                    <div className='mb-10 flex items-center gap-4'>
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            className='text-main'
                        />
                        <p>نتیجه جستجو</p>
                    </div>
                    <div className='CoursesSection course-conatiner grid grid-cols-1 gap-x-4 gap-y-14 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {searchCourses.map((course, index) => (
                            <CourseCard
                                key={index}
                                {...course}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer dynamicDepart='E_NAMAD'>
                <GreenTopFooter />
            </Footer>
        </div>
    )
}
export default UseSearch
