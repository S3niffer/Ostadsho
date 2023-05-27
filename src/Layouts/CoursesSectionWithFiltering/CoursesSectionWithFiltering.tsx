import React from "react"
import CourseCard from "../../components/CourseCard/CourseCard"
import PriceFilter from "../../components/PriceFilter/PriceFilter"
import SideBarBox from "../SideBarBox/SideBarBox"
import SortSection from "../SortSection/SortSection"
import Pagination from "../Pagination/pagination"
import AdvertisingGIF from "../../Assets/bonrailco-1.gif"
import { useSelector } from "react-redux"
import { getCategories, getCourses } from "../../App/Slices/Courses"

const CoursesSectionWithFiltering = () => {
    const Courses = useSelector(getCourses)
    const AllCategories = useSelector(getCategories)

    return (
        <div className="CoursesSectionWithFiltering container px-2 md:px-0">
            <SortSection />
            <div className="courses-sideBar flex flex-col md:flex-row">
                <div className="courses-container md:flex-1">
                    <div className="grid grid-cols-1 bml:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-4 py-8">
                        {Courses.map((courseBox, index) => (
                            <CourseCard key={index} {...courseBox} />
                        ))}
                    </div>
                    <Pagination />
                </div>
                <div className="sidebar mt-12 md:mt-0 md:w-[300px] lg:w-[320px] md:pr-5 flex flex-col gap-6">
                    <SideBarBox title="فیلتر براساس قیمت">
                        <PriceFilter />
                    </SideBarBox>
                    <SideBarBox title="دسته بندی محصولات">
                        <ul className=" flex flex-col">
                            {AllCategories.map((category, index) => (
                                <li
                                    key={category.id}
                                    className={
                                        AllCategories.length === ++index
                                            ? "group mb-3 cursor-pointer"
                                            : "border-b border-b-lightFourthWhite dark:border-b-darkThirdBlack cursor-pointer group h-9"
                                    }
                                >
                                    <div className="px-2 flex justify-between items-center group-hover:border-r-[6px] transition-all duration-500 ease-out border-r-main text-lightWhite h-9 leading-9">
                                        <p className="text-FifthGray dark:text-SecondaryGray text-xs lg:text-sm my-auto">
                                            {category.title}
                                        </p>
                                        <span className="bg-main rounded-full w-4 aspect-square lg:w-5 text-xs flex justify-center items-center pt-[3px] px-[10px] select-none">
                                            {category.courses.length}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SideBarBox>
                    <SideBarBox title="تبلیغات" sticky>
                        <div className="p-4">
                            <img
                                className="rounded-md mx-auto"
                                src={AdvertisingGIF}
                                alt="Advertising"
                            />
                        </div>
                    </SideBarBox>
                </div>
            </div>
        </div>
    )
}
export default CoursesSectionWithFiltering
