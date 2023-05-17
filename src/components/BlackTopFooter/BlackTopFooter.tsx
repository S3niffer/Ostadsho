import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons"
import { faGraduationCap, faHeadset, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlackTopFooter = () => {
    return (
        <div className="BlackTopFooter bg-darkFourthBlack text-lightWhite">
            <div className="container py-4 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 bml:py-6 xl:py-8">
                <div className="mx-auto md:mx-0">
                    <div className="flex gap-2 items-center mb-1">
                        <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                        <p className="font-danafaBold pt-1 lg:text-lg">
                            دوره های باکیفت
                        </p>
                    </div>
                    <span className="text-sm text-lightFifthhWhite lg:text-base">
                        براساس جدیدترین مباحث
                    </span>
                </div>
                <div className="mx-auto md:mx-0">
                    <div className="flex gap-2 items-center mb-1">
                        <FontAwesomeIcon icon={faHeadset} className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                        <p className="font-danafaBold pt-1 lg:text-lg">
                            پشتیبانی 24 ساعته
                        </p>
                    </div>
                    <span className="text-sm text-lightFifthhWhite lg:text-base">
                        سیستم ارسال تیکت حرفه ای
                    </span>
                </div>
                <div className="mx-auto md:mx-0">
                    <div className="flex gap-2 items-center mb-1">
                        <FontAwesomeIcon icon={faMoneyBillAlt} className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                        <p className="font-danafaBold pt-1 lg:text-lg">
                            کش بک محصولات
                        </p>
                    </div>
                    <span className="text-sm text-lightFifthhWhite lg:text-base">
                        کش بک محصولات دارای تخفیف
                    </span>
                </div>
                <div className="mx-auto md:mx-0">
                    <div className="flex gap-2 items-center mb-1">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                        <p className="font-danafaBold pt-1 lg:text-lg">
                            خرید آسان و امن
                        </p>
                    </div>
                    <span className="text-sm text-lightFifthhWhite lg:text-base">
                        در کمترین زمان امن خرید کنید
                    </span>
                </div>
            </div>
        </div>
    )
}
export default BlackTopFooter