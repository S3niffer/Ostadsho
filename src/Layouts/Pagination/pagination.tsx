import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useMemo, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const Pagination = ({ items, itemsCount, Dispatch }: T_PaginationProps) => {
    const { Category_Name, PageNumber } = useParams()
    const Navigate = useNavigate()
    const [activePage, setActivePage] = useState(1)

    const pagesCount = useMemo(() => {
        return Math.ceil(items.length / itemsCount)
    }, [items, itemsCount])

    // Handle PageNumber
    useEffect(() => {
        if (PageNumber) {
            const goToPage: number = +PageNumber < pagesCount ? (+PageNumber < 1 ? 1 : +PageNumber) : pagesCount
            setActivePage(goToPage)
        } else {
            setActivePage(1)
        }
    }, [pagesCount, PageNumber])

    //  set lastIndex
    useEffect(() => {
        if (pagesCount === 1) return
        const LastIndex = itemsCount * activePage

        Dispatch({ type: "SET_LastIndex", payload: LastIndex })
    }, [activePage, PageNumber])

    return (
        <div className='mt-8 flex items-center justify-center gap-1.5 rounded-xl bg-[rgb(240,240,240)] py-4 font-danafa font-semibold text-ThirdGray dark:bg-darkFourthBlack'>
            <Link to={`/categories/${Category_Name}/${activePage - 1}`}>
                <div
                    className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite ${
                        activePage === 1 ? "hidden" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </Link>

            {[...Array.from({ length: pagesCount }, (a, index) => index + 1)].map(page => (
                <Link
                    key={page}
                    to={`/categories/${Category_Name}/${page}`}
                >
                    <div
                        className={`flex aspect-square w-10 items-center justify-center rounded-full pt-1.5  ${
                            activePage === page
                                ? "cursor-not-allowed bg-lightWhite text-darkThirdBlack"
                                : "cursor-pointer transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite"
                        }`}
                    >
                        {page}
                    </div>
                </Link>
            ))}

            <Link to={`/categories/${Category_Name}/${activePage + 1}`}>
                <div
                    className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:border hover:border-main hover:bg-main hover:text-lightWhite dark:text-SecondaryGray dark:hover:text-lightWhite ${
                        activePage === pagesCount ? "hidden" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </Link>
        </div>
    )
}
export default Pagination
