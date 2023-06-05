import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../Layouts/Footer/Footer"
import Header from "../../Layouts/Header/Header"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"
import { faCartPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { clearBasket, getBasketCourses, removeCourse } from "../../App/Slices/Basket"
import { useDispatch, useSelector } from "react-redux"
import { useMemo, useState } from "react"
import { addToBoughtCourses } from "../../App/Slices/Bought"
import { Link } from "react-router-dom"
import NotificationAlert from "../../components/NotificationAlert/NotificationAlert"

const Basket = () => {
    const BasketCourses = useSelector(getBasketCourses)
    const Dispatch = useDispatch()
    const [notification, SetNotification] = useState<("deleted" | "bought")[]>([])

    const TotalPrice = useMemo(() => {
        if (BasketCourses.length === 0) return 0

        return BasketCourses.slice().reduce((prv, crtn) => {
            let PRV = 0
            let CRNT = 0
            if (prv.discountPercent) {
                PRV = prv.price * ((100 - prv.discountPercent) / 100)
            } else {
                PRV = prv.price
            }
            if (crtn.discountPercent) {
                CRNT = crtn.price * ((100 - crtn.discountPercent) / 100)
            } else {
                CRNT = crtn.price
            }

            return { ...prv, price: PRV + CRNT, discountPercent: 0 }
        }).price
    }, [BasketCourses])

    const _buyHandler = () => {
        if (BasketCourses.length === 0) return
        const nameOfCourses = BasketCourses.slice().map(({ courseName }) => courseName)
        Dispatch(addToBoughtCourses(nameOfCourses))
        Dispatch(clearBasket())
        SetNotification(prv => [...prv, "bought"])
    }

    return (
        <div className='Basket'>
            <Header shadow />
            <div className='BasketMain container mb-16 mt-5 px-2 md:px-0'>
                <div className='mb-12 flex items-center gap-4 lg:gap-6'>
                    <div className='icon flex items-center justify-center rounded-md border-[3px] border-main bg-light_green p-2 lg:scale-[1.3] xl:scale-[1.4]'>
                        <FontAwesomeIcon
                            icon={faCartPlus}
                            className='text-main'
                        />
                    </div>
                    <div>
                        <p className='font-yekaBakhBold text-[15px] text-Gray lg:text-xl xl:text-2xl'>سبد خرید</p>
                        <span className='text-sm text-SecondaryGray lg:text-base xl:text-lg'>فهرست اقلام خودرا مدیریت کنید</span>
                    </div>
                </div>
                {notification.map((notif, index) => (
                    <NotificationAlert
                        key={index}
                        stat={notif}
                    />
                ))}
                {BasketCourses.length !== 0 ? (
                    <div className='flex flex-col'>
                        <div className='rounded-md border p-6'>
                            <div className='md:hidden'>
                                {BasketCourses.map(course => (
                                    <div
                                        key={course.courseName}
                                        className='mb-4 flex flex-col gap-2 rounded-md border-2 border-b-0 border-t-0 border-main px-1 py-2 shadow'
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                            className='ml-auto mr-2 cursor-pointer text-lg text-red-700'
                                            onClick={() => {
                                                Dispatch(removeCourse(course.courseName))
                                                SetNotification(prv => [...prv, "deleted"])
                                            }}
                                        />
                                        <div className='flex items-center justify-between border-b p-2 text-SecondaryGray'>
                                            <p className='text-ThirdGray'>نام محصول:</p>
                                            <p className='cursor-pointer font-yekaBakh text-lg'>{course.title}</p>
                                        </div>
                                        <div
                                            className={`flex items-center justify-between  p-2 text-SecondaryGray ${
                                                course.discountPercent ? "border-b" : ""
                                            }`}
                                        >
                                            <p className='text-ThirdGray'>قیمت :</p>
                                            <p className='font-yekaBakhHeavy text-lg'>
                                                {course.price ? (
                                                    <>
                                                        {course.price.toLocaleString("en-us")}{" "}
                                                        <span className='font-danafa text-sm'>تومان</span>
                                                    </>
                                                ) : (
                                                    "رایگان"
                                                )}{" "}
                                            </p>
                                        </div>
                                        {course.discountPercent ? (
                                            <>
                                                <div className='flex items-center justify-between border-b p-2 text-SecondaryGray'>
                                                    <p className='text-ThirdGray'>درصد تخفیف:</p>
                                                    <p className='cursor-pointer font-yekaBakh text-lg'>
                                                        {course.discountPercent + "%"}
                                                    </p>
                                                </div>
                                                <div className='flex items-center justify-between p-2 text-SecondaryGray'>
                                                    <p className='text-ThirdGray'>قیمت نهایی:</p>
                                                    <p className='font-yekaBakhHeavy text-lg'>
                                                        {(course.price * ((100 - course.discountPercent) / 100)).toLocaleString(
                                                            "en-us"
                                                        )}
                                                        <span className='font-danafa text-sm'>تومان</span>
                                                    </p>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                            <table className='hidden w-full md:table'>
                                <thead>
                                    <tr>
                                        <th className='w-1/12 border-b pb-2'></th>
                                        <th
                                            className='w-2/5 border-b pb-2'
                                            colSpan={2}
                                        >
                                            محصول
                                        </th>
                                        <th className='w-1/6 border-b pb-2'>قیمت</th>
                                        <th className='w-1/6 border-b pb-2'>تخفیف</th>
                                        <th className='w-1/6 border-b pb-2'>قیمت نهایی</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {BasketCourses.map(course => (
                                        <tr
                                            key={course.courseName}
                                            className='h-14 even:bg-lightSecondaryWhite dark:even:bg-darkFourthBlack'
                                        >
                                            <td className='py-2.5 text-center'>
                                                <FontAwesomeIcon
                                                    icon={faTrashCan}
                                                    className='cursor-pointer text-lg text-red-700'
                                                    onClick={() => {
                                                        Dispatch(removeCourse(course.courseName))
                                                        SetNotification(prv => [...prv, "deleted"])
                                                    }}
                                                />
                                            </td>
                                            <td className='py-2.5 text-center'>
                                                <img
                                                    src={course.imageSrc}
                                                    alt='course'
                                                    className='aspect-video w-[70px] rounded-sm bml:w-20 lg:w-24'
                                                />
                                            </td>
                                            <td className='py-2.5 text-center'>
                                                <Link to={`/${course.categoryName}/${course.courseName}`}>{course.title}</Link>
                                            </td>
                                            <td className='py-2.5 text-center'>
                                                {course.price ? course.price.toLocaleString("en-us") : "رایگان"}
                                            </td>
                                            <td className='py-2.5 text-center'>
                                                {course.discountPercent ? course.discountPercent + "%" : "0%"}
                                            </td>
                                            <td className='py-2.5 text-center'>
                                                {course.discountPercent
                                                    ? (course.price * ((100 - course.discountPercent) / 100)).toLocaleString(
                                                          "en-us"
                                                      )
                                                    : course.price
                                                    ? course.price.toLocaleString("en-us")
                                                    : "رایگان"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='rounded-md border p-6'>
                            <h3 className='text-xl lg:text-2xl'>جمع کل سبدخرید</h3>
                            <div className='flex items-center justify-around border-b pb-2 pt-5 text-SecondaryGray'>
                                <p className='text-ThirdGray'>مجموع</p>
                                <p className='font-yekaBakhHeavy text-lg'>
                                    {TotalPrice.toLocaleString()} <span className='font-danafa text-sm'>تومان</span>
                                </p>
                            </div>
                            <button
                                onClick={_buyHandler}
                                className='btn mt-6 w-full bg-main py-2 text-lightWhite transition-all duration-200 hover:translate-y-px hover:bg-mainHover'
                            >
                                تسویه حساب
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='text-center'>
                        سبد خرید شما در حال حاضر خالی است. لطفا برای افزودن دوره ها به صفحه
                        <Link
                            to='/categories/all'
                            className='text-main'
                        >
                            {" فروشگاه "}
                        </Link>
                        مراجعه فرمایید.
                        <div className='mt-5'>
                            <Link to='/categories/all'>
                                <button className='btn btn-green px-4 py-3'>برو به صفحه فروشگاه</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer dynamicDepart='E_NAMAD'>
                <GreenTopFooter />
            </Footer>
        </div>
    )
}
export default Basket
