import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type props = { Name: string; stat: "added" } | { stat: "alreadyAdded" | "deleted" | "bought"; Name?: undefined }

const Notificationadded = ({ Name, stat = "added" }: props) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setWidth(prv => {
                if (prv <= 100) {
                    return prv + 0.07
                } else {
                    clearInterval(timer)
                    return 100
                }
            })
        }, 1)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={`container p-2 md:px-0 ${width === 100 ? "hidden" : "block"}`}>
            <div
                className={`relative flex items-center justify-between overflow-hidden rounded-[10px] border-t-2  p-2 pr-3.5  ${
                    stat === "added" || stat === "bought"
                        ? "border-t-main bg-[#52AC661F] text-main"
                        : "border-t-[#78818e] bg-[#78818e1f] text-[#78818e]"
                }`}
            >
                <div className='flex items-center gap-2.5'>
                    <FontAwesomeIcon
                        icon={stat === "added" ? faCheckCircle : faExclamationCircle}
                        className='pb-1'
                    />
                    <p>
                        {stat === "added" ? `${'محصول " ' + Name + ' " به سبد خرید شما اضافه شد'}` : null}
                        {stat === "alreadyAdded" ? "محصولی مورد نظر از قبل در سبد خرید شما موجود است" : null}
                        {stat === "deleted" ? "محصول مورد نظر با موفقیت حذف شد" : null}
                        {stat === "bought"
                            ? "خرید شما با موفقیت انجام شد اکنون به جلسات دوره دسترسی دارید ممنون از اینکه استادشو رو انتخاب کردید"
                            : null}
                    </p>
                </div>
                {stat === "added" || stat === "alreadyAdded" ? (
                    <Link to='/user/basket'>
                        <button
                            className={`btn  px-2.5 py-1.5 text-sm text-lightWhite transition-all duration-200 hover:translate-y-px  ${
                                stat === "added" ? "bg-main hover:bg-mainHover" : "bg-[#78818e] hover:bg-[#585f69]"
                            }`}
                        >
                            مشاهده سبد خرید
                        </button>
                    </Link>
                ) : null}

                <div
                    className='absolute bottom-0 right-0 h-[3px]'
                    style={
                        stat === "added" || stat === "bought"
                            ? { width: `${width}%`, backgroundColor: "#52ac66" }
                            : { width: `${width}%`, backgroundColor: "#78818e" }
                    }
                ></div>
            </div>
        </div>
    )
}
export default Notificationadded
