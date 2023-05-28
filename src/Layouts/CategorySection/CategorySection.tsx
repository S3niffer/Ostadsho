import { faArrowLeft, faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"
import { useRef } from "react"
import CategoryItem from "../../components/CategoryItem/CategoryItem"
import { useSelector } from "react-redux"
import { getCategories } from "../../App/Slices/Courses"

const CategorySection = () => {
    const LeftarrowBTN = useRef<HTMLDivElement>(null)
    const RightarrowBTN = useRef<HTMLDivElement>(null)

    const AllCategories = useSelector(getCategories)

    return (
        <div className='CategorySection container'>
            <div className='mb-1 text-center text-sm'>
                <span className='CategorySection-introduction relative font-RokhFaNumLight dark:text-lightSecondaryWhite bml:text-lg lg:text-xl'>
                    - دسته بندی دوره های آموزشـی -
                    <div className='absolute -left-[10%] -top-[20%] -rotate-12 scale-150 opacity-20'>
                        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                    </div>
                    <div className='absolute -right-[10%] top-[20%] rotate-12 scale-150 opacity-20'>
                        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                    </div>
                </span>
            </div>
            <p className='mb-6 text-center font-RokhFaNumBold text-lg font-light dark:text-lightSecondaryWhite bml:text-xl lg:text-2xl'>
                دوره های فراوان در دسته بندی های مختلف
            </p>
            <div className='group relative px-2 pb-5 font-danafaBold text-lightWhite'>
                <Swiper
                    className='px-2'
                    modules={[Navigation, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onInit={swiper => {
                        swiper.params.navigation = {
                            nextEl: LeftarrowBTN.current,
                            prevEl: RightarrowBTN.current,
                            disabledClass: "hidden",
                        }
                        swiper.navigation.init()
                        swiper.navigation.update()
                    }}
                    breakpoints={{
                        270: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        370: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                        },
                        980: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}>
                    {AllCategories.map(item => (
                        <SwiperSlide
                            key={item.id}
                            className='group/swiperslide mb-8 flex cursor-pointer flex-col items-center rounded-md p-2 text-Gray shadow-lg transition-all duration-300 hover:bg-main hover:text-lightWhite dark:bg-darkFourthBlack dark:text-lightWhite dark:hover:bg-main'>
                            <CategoryItem
                                key={item.id}
                                {...item}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    ref={LeftarrowBTN}
                    className='md:group-hover:scale-115 absolute left-1 top-1/4 -z-[1] flex -translate-y-1 scale-0 cursor-pointer place-items-center rounded-full bg-darkThirdBlack px-[8px] py-[7px] text-lightSecondaryWhite opacity-0 transition-all duration-500 group-hover:z-[10] group-hover:scale-75 group-hover:opacity-100 2xs:group-hover:scale-100 md:translate-y-1 bml:group-hover:scale-125 lg:translate-y-3 lg:group-hover:scale-150 xl:pt-[7.5px] xl:group-hover:scale-[1.75]'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div
                    ref={RightarrowBTN}
                    className='md:group-hover:scale-115 absolute right-1 top-1/4 -z-[1] flex -translate-y-1 scale-0 cursor-pointer place-items-center rounded-full bg-darkThirdBlack px-[8px] py-[7px] text-lightSecondaryWhite opacity-0 transition-all duration-500 group-hover:z-[10] group-hover:scale-75 group-hover:opacity-100 2xs:group-hover:scale-100 md:translate-y-1 bml:group-hover:scale-125 lg:translate-y-3 lg:group-hover:scale-150 xl:pt-[7.5px] xl:group-hover:scale-[1.75]'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}
export default CategorySection
