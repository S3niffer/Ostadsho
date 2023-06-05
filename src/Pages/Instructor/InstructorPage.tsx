import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getInstructor } from "../../App/Slices/Instructors"
import Header from "../../Layouts/Header/Header"
import Footer from "../../Layouts/Footer/Footer"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import { useEffect, useRef, useState } from "react"
import { getCourses } from "../../App/Slices/Courses"
import CourseCard from "../../components/CourseCard/CourseCard"

const InstructorPage = () => {
    const { Instructor_Name } = useParams()
    const Instructor = useSelector((state: RootState) => getInstructor(state, Instructor_Name!))
    const obptionBackground = useRef<HTMLDivElement>(null)
    const AllCourses = useSelector(getCourses)
    const [activeOptionOffsetTOP, setActiveOptionOffsetTOP] = useState({ name: "bio", offsetTop: 10 })

    useEffect(() => {
        if (!obptionBackground.current) return
        obptionBackground.current.style.top = activeOptionOffsetTOP.offsetTop! + "px"
    }, [activeOptionOffsetTOP.offsetTop])

    return (
        <div className='InstructorPage'>
            <Header shadow />
            <div className='container my-12 px-2 md:px-0'>
                <div className='flex flex-row items-center gap-3'>
                    <img
                        src={Instructor?.avatarSrc}
                        alt='avatar'
                        className='aspect-square w-20 rounded-full xs:w-24 bml:w-28'
                    />
                    <p className='font-yekaBakhBold md:text-xl lg:text-2xl'>{Instructor?.name}</p>
                </div>
                <div className='relative mt-6 flex gap-1 xs:gap-2 md:gap-3 lg:gap-3.5'>
                    <div className='max-w-[130px]'>
                        <div className='sticky right-0 top-6'>
                            <div className='relative flex h-full flex-col gap-1 rounded-md bg-lightThirdWhite p-2.5 dark:bg-darkFourthBlack'>
                                <div
                                    ref={obptionBackground}
                                    className='absolute left-0 right-0 mx-auto h-[calc(50%-16px)] w-[calc(100%-16px)] rounded-md bg-lightWhite shadow-md transition-all duration-300 dark:bg-darkBlack'
                                ></div>
                                <div
                                    data-name='bio'
                                    onClick={e => {
                                        const name = e.currentTarget.dataset["name"]
                                        setActiveOptionOffsetTOP({
                                            offsetTop: e.currentTarget.offsetTop - 16,
                                            name: name!,
                                        })
                                    }}
                                    className='relative z-[1] m-4 cursor-pointer rounded-md text-center text-xs hover:text-main lg:text-lg'
                                >
                                    بیوگرافی
                                </div>
                                <div
                                    data-name='courses'
                                    className='relative z-[1] m-4 cursor-pointer rounded-md text-center text-xs hover:text-main lg:text-lg'
                                    onClick={e => {
                                        const name = e.currentTarget.dataset["name"]
                                        setActiveOptionOffsetTOP({
                                            offsetTop: e.currentTarget.offsetTop - 16,
                                            name: name!,
                                        })
                                    }}
                                >
                                    دوره ها
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex-1`}>
                        <div className={`text-justify ${activeOptionOffsetTOP.name === "bio" ? "block" : "hidden"}`}>
                            {Instructor?.desc}
                        </div>
                        <div
                            className={`CoursesSection course-conatiner grid grid-cols-1 gap-x-4  gap-y-14 pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
                                activeOptionOffsetTOP.name === "courses" ? "block" : "hidden"
                            }`}
                        >
                            {AllCourses.slice()
                                .filter(({ instructorName }) => Instructor_Name === instructorName)
                                .map(course => (
                                    <CourseCard
                                        key={course.courseName}
                                        {...course}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer dynamicDepart='E_NAMAD'>
                <GreenTopFooter />
            </Footer>
        </div>
    )
}
export default InstructorPage
