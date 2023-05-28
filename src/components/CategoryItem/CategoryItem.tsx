import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const CategoryItem = ({ icon, title, courses, categoryName }: T_CategoryItem) => {
    return (
        <Link
            to={"/categories/" + categoryName}
            className='flex flex-col items-center'>
            <FontAwesomeIcon
                icon={icon}
                className='text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl'
            />
            <p className='mt-3 text-sm md:text-base lg:text-lg xl:text-xl'>{title}</p>
            <span className='font-danafa text-[10px] text-FourthGray transition-all duration-300 group-hover/swiperslide:text-lightWhite md:text-xs lg:text-sm xl:text-base'>
                {courses.length + " "}
                دوره آموزشی
            </span>
        </Link>
    )
}
export default CategoryItem
