import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const Pagination = ({ setSliceCourseOption, FilteredCourses: Courses, priceRange }: T_PaginationProps) => {
    const { Category_Name, PageNumber } = useParams()
    const [status, setStatus] = useState({ showPerPage: 3, Pages: 1 })
    const Navigate = useNavigate()
    useEffect(() => {
        const FilteredCourses = Courses.filter(({ price }) => {
            const { min, max } = priceRange
            if (price < Number(min) || price > Number(max)) {
                return false
            }
            return true
        })

        const Pages = Math.ceil(FilteredCourses.length / status.showPerPage)
        const lastIndex = (Number(PageNumber) || 1) * status.showPerPage
        setStatus(prv => ({ ...prv, Pages }))
        setSliceCourseOption({ coursePerPage: 3, lastIndex: lastIndex })
    }, [PageNumber, Courses, priceRange])

    if (Number(PageNumber) > status.Pages) {
        Navigate(`/Categories/${Category_Name}/${status.Pages}`)
    }
    return (
        <div className='flex items-center justify-center gap-1.5 rounded-xl bg-[rgb(240,240,240)] py-4 font-danafa font-semibold text-ThirdGray dark:bg-darkFourthBlack'>
            <Link to={`/Categories/${Category_Name}/${Number(PageNumber) ? Number(PageNumber) - 1 : 1}`}>
                <div
                    className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite ${
                        PageNumber === "1" || PageNumber === undefined ? "hidden" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </Link>
            {[...new Array(status.Pages)].map((page, index) => (
                <Link
                    key={index}
                    to={index === 0 ? `/Categories/${Category_Name}` : `/Categories/${Category_Name}/${index + 1}`}
                >
                    <div
                        className={`flex aspect-square w-10 items-center justify-center rounded-full pt-1.5  ${
                            Number(PageNumber) === index + 1 || (isNaN(Number(PageNumber)) && index === 0)
                                ? "cursor-not-allowed bg-lightWhite text-darkThirdBlack"
                                : "cursor-pointer transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite"
                        }`}
                    >
                        {index + 1}
                    </div>
                </Link>
            ))}
            <Link to={`/Categories/${Category_Name}/${Number(PageNumber) ? Number(PageNumber) + 1 : 2}`}>
                <div
                    className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite ${
                        PageNumber === String(status.Pages) || status.Pages === 1 ? "hidden" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </Link>
        </div>
    )
}
export default Pagination
