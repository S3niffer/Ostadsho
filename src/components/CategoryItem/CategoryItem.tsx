import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type CategoryItemProps = {
    id: number;
    icon: IconDefinition;
    title: string;
    courseCount: number
}

const CategoryItem = ({ id, icon, title, courseCount }: CategoryItemProps) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
            <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">{title}</p>
            <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                {courseCount}
                دوره آموزشی
            </span>
        </>
    )
}
export default CategoryItem