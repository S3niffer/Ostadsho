import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../Layouts/Footer/Footer"
import Header from "../../Layouts/Header/Header"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { getBoughtCourses, removefromBoughtCourses } from "../../App/Slices/Bought"
import { getCourses } from "../../App/Slices/Courses"
import React, { useMemo } from "react"
import { Link } from "react-router-dom"

const UserCourses = () => {
    const purchased = useSelector(getBoughtCourses)
    const allcourses = useSelector(getCourses)
    const Dispatch = useDispatch()

    const findCourses = useMemo(() => {
        if (purchased.length === 0) return []
        let Courses = []
        for (let i = 0; i < purchased.length; ++i) {
            let find = allcourses.find(course => course.courseName === purchased[i])
            if (!find) continue
            Courses.push(find)
        }
        return Courses
    }, [purchased, allcourses])

    return (
        <div className='UserCourses'>
            <Header shadow />
            <div className='container px-2 py-10 md:px-0'>
                <div>
                    <div className='mb-10 flex items-center gap-4'>
                        <div className='icon flex items-center justify-center rounded-md border-[3px] border-main bg-light_green p-2 lg:scale-[1.3] xl:scale-[1.4]'>
                            <FontAwesomeIcon
                                icon={faMoneyBillWave}
                                className='text-main'
                            />
                        </div>
                        <p>دوره های خریداری شده</p>
                    </div>
                    {findCourses.length ? (
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                            {findCourses.map((course, index) => (
                                <React.Fragment key={index}>
                                    <div className='flex flex-col'>
                                        <Link to={`/${course.categoryName}/${course.courseName}`}>
                                            <div className='flex items-center gap-3 rounded-md rounded-bl-none bg-lightSecondaryWhite dark:bg-darkFourthBlack'>
                                                <img
                                                    src={course.imageSrc}
                                                    alt='course'
                                                    className='aspect-video h-20 rounded-r-md'
                                                />
                                                <div>
                                                    <p>{course.title}</p>
                                                    <span>{course.price ? course.price.toLocaleString() : "رایگان"}</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <div
                                            className='mr-auto inline cursor-pointer rounded-md rounded-t-none bg-Gray px-3 py-1.5 text-lightWhite'
                                            onClick={() => {
                                                Dispatch(removefromBoughtCourses(course.courseName))
                                            }}
                                        >
                                            حذف از دوره های من
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <div className='text-center'>
                            شما هنوز دوره ای خریداری نکرده اید
                            <div className='mt-5'>
                                <Link to='/categories/all'>
                                    <button className='btn btn-green px-4 py-3'>برو به صفحه فروشگاه</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer dynamicDepart='E_NAMAD'>
                <GreenTopFooter />
            </Footer>
        </div>
    )
}
export default UserCourses
