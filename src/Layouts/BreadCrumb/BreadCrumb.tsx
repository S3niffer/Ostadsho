import { Link, useLocation } from "react-router-dom"
import SearchInput from "../../components/SearchInput/SearchInput"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { getCategories } from "../../App/Slices/Courses"

const BreadCrumb = () => {
    const [BreadCrumbs, setBreadCrumbs] = useState<T_BreadCrumb[]>([
        { id: 0, title: "خانه", href: "/" },
    ])
    const { pathname } = useLocation()
    const AllCategories = useSelector(getCategories)

    useEffect(() => {
        if (pathname.toLocaleLowerCase().startsWith("/categories/")) {
            const categoryName = pathname.split("/")[2]
            if (categoryName === "All") {
                setBreadCrumbs([
                    { id: 0, title: "خانه", href: "/" },
                    { id: 1, title: "آموزش برنامه نویسی", href: pathname },
                ])
            } else {
                const mainCategory = AllCategories.find(
                    (category) => category.categoryName === categoryName
                )
                const mainCategoryTitle = mainCategory?.title
                setBreadCrumbs([
                    { id: 0, title: "خانه", href: "/" },
                    { id: 1, title: mainCategoryTitle!, href: pathname },
                ])
            }
        }
    }, [pathname])

    return (
        <div className="BreadCrumb">
            <div className="container py-10 px-4 md:px-0 text-lightWhite flex flex-col lg:flex-row justify-between lg:items-center">
                <div>
                    <h3 className="font-danafaBold text-2xl">
                        تمامی محصولات سایت
                    </h3>
                    <div className="mt-3 mb-5 lg:text-lg flex gap-4">
                        {BreadCrumbs.map(({ href, id, title }, index) => (
                            <React.Fragment key={id}>
                                <Link
                                    to={href}
                                    className={`text-lg font-RokhFaNumBold font-semibold hover:text-[#333333] ${
                                        BreadCrumbs.length === ++index
                                            ? "text-[#a2d6a8] hover:text-[#a2d6a8]"
                                            : undefined
                                    }`}
                                >
                                    {" " + title + " "}
                                </Link>
                                {BreadCrumbs.length === index ? null : (
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="flex-grow-[0.22] xl:text-lg">
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb
