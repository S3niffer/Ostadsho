import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import avatr from '../../Assets/avatars/male2016108394376874.jpg'
import avatr1 from '../../Assets/avatars/male1084675750580.jpg'
import avatr2 from '../../Assets/avatars/female20161025239720032.jpg'
import CommentItem from "../../components/CommentItem/CommentItem";

export type commentT = {
    id: number,
    name: string,
    imgSrc: string,
    comment: string
}

const Comments: commentT[] = [
    {
        id: 0, name: 'نگار عبدی', imgSrc: avatr2, comment: 'برنامه‌نویسی کارخانه‌ی تبدیل ایده به واقعیت است که با کمک آموزش‌های جذاب و کاربردی استاد شو، میتوانید مالک این کارخانه باشید. '
    },
    { id: 1, name: 'محمد حسن زاده', imgSrc: avatr, comment: 'استاد شو شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی، بروز و پروژه محور متناسب با نیاز بازار داخلی و جهانی ارائه میده! دمتون گرم ' },
    {
        id: 2, name: 'علیرضا محمدی', imgSrc: avatr1, comment: 'به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی کاربردی بوده.تبریک میگم به محمد معین مهرانی عزیز برای دوره های ارزشمندی که خلق کرده.'
    },
]

const CommentSection = () => {
    return (
        <div className="CommentSection container pb-12 overflow-hidden md:overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:items-center">
                <div className="flex flex-col gap-4 md:gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="34"
                            className="fill-darkBlack dark:fill-lightWhite md:mt-2 lg:scale-105 xl:scale-110"
                            viewBox="0 0 37 34"
                        >
                            <circle cx="10" cy="24" r="10"></circle>
                            <circle
                                cx="30"
                                cy="13"
                                r="7"
                                fillOpacity="0.4"
                            ></circle>
                            <circle
                                cx="15"
                                cy="4"
                                r="4"
                                fillOpacity="0.7"
                            ></circle>
                        </svg>
                        <div>
                            <h2 className="font-yekaBakhHeavy text-darkBlack dark:text-lightWhite text-3xl mb-4 leading-7">
                                در مورد استادشو  چه میشنویم؟
                            </h2>
                            <span className="text-lg text-ThirdGray dark:text-lightSecondaryWhite">
                                این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد استادشو دارند.
                            </span>
                        </div>
                    </div>
                    <svg className="fill-darkBlack dark:fill-lightWhite ms-auto rotate-[-134deg] md:rotate-0" width="81" height="25" viewBox="0 0 81 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1967 14.3986C25.5868 13.9847 22.0069 13.342 18.4784 12.4745C16.792 12.0466 12.2026 11.5965 11.3659 10.0623C14.4789 9.24078 17.802 9.66713 20.9105 8.43793C22.2549 7.90469 24.0976 7.15477 24.3908 5.52325C24.8311 3.10397 22.5994 3.77298 21.0294 3.94254C17.6692 4.3178 14.1955 4.26364 10.8129 4.37265C8.21636 4.45288 2.1991 3.36004 0.75924 6.3001C-0.680619 9.24016 3.70799 12.3632 5.54259 14.087C8.50795 16.9111 11.4369 19.7705 14.422 22.5651C15.2426 23.339 16.7726 25.1362 18.1266 24.8437C19.9916 24.4238 19.3821 22.6707 18.7377 21.448C18.3268 20.6539 12.3485 13.2275 12.3318 13.2334C12.9125 13.059 16.0756 14.503 16.5971 14.6724C18.7851 15.3399 21.0082 15.8863 23.2564 16.3091C29.1409 17.505 35.2798 18.8366 41.3307 18.5846C44.1562 18.4613 46.2644 17.4415 48.7901 16.4024C51.1811 15.4181 53.2468 16.8916 55.7475 17.5098C60.9531 18.7403 66.3814 18.6725 71.5546 17.3125C75.0607 16.4128 83.0583 13.2526 79.9898 8.14036C79.1913 6.81046 77.6537 5.8984 77.713 7.71002C77.7492 8.94395 78.6421 9.14417 78.0975 10.5525C77.6207 11.4769 76.8129 12.1875 75.8353 12.5428C71.3525 14.7964 64.9792 15.3272 60.1138 14.7865C58.2671 14.554 54.5964 13.8444 53.1131 12.6278C51.7956 11.5519 52.7224 10.088 52.4922 8.17502C51.8776 3.22806 46.3507 -1.37941 41.1423 0.48748C33.6157 3.20407 42.2988 11.4021 45.8298 13.4113C42.1694 16.6785 33.3853 14.926 29.1967 14.3986ZM44.3831 4.04077C48.1118 4.66985 49.1864 7.04037 48.6529 10.4538C47.4697 9.70609 38.6072 3.3136 44.3831 4.04077C45.0235 4.15333 43.8802 3.97745 44.3831 4.04077Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="w-[90%] mx-auto md:ps-12 md:w-full">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        className="commentsSwiper"
                    >
                        {
                            Comments.map(comment => (
                                <SwiperSlide key={comment.id}>
                                    <CommentItem {...comment} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default CommentSection
