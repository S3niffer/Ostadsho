import { Link } from "react-router-dom"
import CourseCard from "../../components/CourseCard/CourseCard"
import { useSelector } from "react-redux"
import { getCourses } from "../../App/Slices/Courses"

const CoursesSection = () => {
    const Courses = useSelector(getCourses)
    return (
        <div className="CoursesSection container">
            <div className="title gap-2 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col gap-3 md:flex-row items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.5"
                        height="31.5"
                        viewBox="0 0 21.5 21.5"
                    >
                        <g fill="#ffb726">
                            <path
                                d="M-99.172 19.006a.828.828 0 00.828-.828v-4.969a.828.828 0 00-1.656 0v4.972a.828.828 0 00.828.825zM-79.328 12.381a.828.828 0 00-.828.828v4.972a.828.828 0 101.656 0v-4.972a.828.828 0 00-.828-.828zM-81.736 18.238V11.52A2.522 2.522 0 00-84.253 9h-10.08a2.522 2.522 0 00-2.52 2.52v6.718a7.569 7.569 0 006.719 7.512v3.07h-2.519a.84.84 0 000 1.68h6.719a.84.84 0 000-1.68h-2.519v-3.07a7.569 7.569 0 006.717-7.512zm-13.437 0V11.52a.841.841 0 01.84-.84h10.08a.841.841 0 01.84.84v6.718a5.879 5.879 0 11-11.758 0z"
                                transform="translate(100 -9)"
                            ></path>
                            <path
                                d="M-91.725 17.332l-.289 1.74a.828.828 0 001.2.871l1.566-.813 1.566.813a.828.828 0 001.2-.871l-.289-1.74 1.257-1.238a.828.828 0 00-.458-1.409l-1.744-.263-.789-1.578a.828.828 0 00-1.482 0l-.789 1.578-1.744.263a.828.828 0 00-.458 1.409zm1.617-1.336a.828.828 0 00.617-.449l.24-.481.24.481a.828.828 0 00.617.449l.532.08-.383.377a.828.828 0 00-.236.726l.088.53-.477-.248a.828.828 0 00-.763 0l-.477.248.088-.53a.828.828 0 00-.236-.726l-.383-.377z"
                                transform="translate(100 -9)"
                            ></path>
                        </g>
                    </svg>
                    <div className="text-center md:text-right">
                        <p className="font-yekaBakhBold md:text-lg bml:text-xl lg:text-2xl">
                            جـدیدترین دوره هـــای آمـــوزشـــــــی
                        </p>
                        <span className="font-yekaBakhLight text-ThirdGray dark:text-lightSecondaryWhite tracking-[1.5px] text-xs md:text-sm bml:text-base lg:text-lg uppercase">
                            the latest training courses
                        </span>
                    </div>
                </div>
                <Link
                    to={"/Categories/All"}
                    className="w-2/3 md:w-[150px] lg:w-[200px]"
                >
                    <div className="text-center relative bg-ThirdGray text-lightWhite rounded-md  py-1.5 cursor-pointer text-xs 2xs:text-sm flex items-center justify-between md:justify-center md:gap-2 md:py-2.5 bml:text-base lg:text-lg  lg:py-3 hover:bg-Gray transition-all duration-300">
                        <div className="md:hidden"></div>
                        <span>مشاهده بیشتر</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 81 70"
                            className=""
                        >
                            <path
                                className="fill-lightWhite group-hover:fill-main"
                                fillRule="evenodd"
                                d="M18.732 33.232a2.5 2.5 0 000 3.536L32.066 50.1a2.5 2.5 0 103.535-3.535L26.535 37.5H60.5a2.5 2.5 0 000-5H26.535l9.066-9.066a2.5 2.5 0 00-3.535-3.535L18.732 33.232z"
                                clipRule="evenodd"
                                opacity="0.4"
                            ></path>
                            <path
                                className="fill-lightWhite group-hover:fill-main"
                                d="M18.732 36.768a2.5 2.5 0 010-3.536L32.066 19.9a2.5 2.5 0 013.535 3.536l-11.67 11.557L35.6 46.566a2.5 2.5 0 01-3.535 3.535L18.732 36.768z"
                            ></path>
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="CoursesSection course-conatiner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14 gap-x-4 py-16">
                {Courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    )
}
export default CoursesSection
