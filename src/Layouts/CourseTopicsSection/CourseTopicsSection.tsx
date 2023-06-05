import Accordion from "../../components/Accordion/Accordion"
import { addCourse } from "../../App/Slices/Basket"
import { Dispatch, useEffect } from "react"
import { AnyAction } from "@reduxjs/toolkit"
import NotificationAlert from "../../components/NotificationAlert/NotificationAlert"
import { useState } from "react"
import { useParams } from "react-router-dom"

const CourseTopicsSection = ({
    chapters,
    isBought,
    Course,
    isInTheBasket,
    Dispatch,
}: {
    chapters: T_chapter[]
    isBought: boolean
    Course: T_Course
    isInTheBasket: T_Course | undefined
    Dispatch: Dispatch<AnyAction>
}) => {
    const [notification, SetNotification] = useState<("added" | "alreadyAdded")[]>([])
    const { Category_Name, Course_Name } = useParams()

    useEffect(() => {
        if (notification.length === 0) return
        SetNotification([])
    }, [Category_Name, Course_Name])
    return (
        <div className='container mb-3 px-2 md:px-0'>
            {notification.map((notif, index) => {
                return notif === "added" ? (
                    <NotificationAlert
                        key={index}
                        Name={Course.title}
                        stat={notif}
                    />
                ) : (
                    <NotificationAlert
                        key={index}
                        stat={notif}
                    />
                )
            })}
            <div
                className={`rounded-md bg-lightThirdWhite p-5 dark:bg-darkFourthBlack ${
                    !isBought ? "relative max-h-64 overflow-hidden" : ""
                }`}
            >
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='25'
                            fill='none'
                            viewBox='0 0 200 200'
                            className='xs:h-8 xs:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12'
                        >
                            <g filter='url(#filter0_d_3450_1924)'>
                                <circle
                                    cx='100'
                                    cy='96'
                                    r='50'
                                    fill='#52AC66'
                                ></circle>
                            </g>
                            <defs>
                                <filter
                                    id='filter0_d_3450_1924'
                                    width='200'
                                    height='200'
                                    x='0'
                                    y='0'
                                    colorInterpolationFilters='sRGB'
                                    filterUnits='userSpaceOnUse'
                                >
                                    <feFlood
                                        floodOpacity='0'
                                        result='BackgroundImageFix'
                                    ></feFlood>
                                    <feColorMatrix
                                        in='SourceAlpha'
                                        result='hardAlpha'
                                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                    ></feColorMatrix>
                                    <feOffset dy='4'></feOffset>
                                    <feGaussianBlur stdDeviation='25'></feGaussianBlur>
                                    <feComposite
                                        in2='hardAlpha'
                                        operator='out'
                                    ></feComposite>
                                    <feColorMatrix values='0 0 0 0 0.321569 0 0 0 0 0.67451 0 0 0 0 0.4 0 0 0 1 0'></feColorMatrix>
                                    <feBlend
                                        in2='BackgroundImageFix'
                                        result='effect1_dropShadow_3450_1924'
                                    ></feBlend>
                                    <feBlend
                                        in='SourceGraphic'
                                        in2='effect1_dropShadow_3450_1924'
                                        result='shape'
                                    ></feBlend>
                                </filter>
                            </defs>
                        </svg>
                        <div className='flex flex-col pt-1.5'>
                            <p className='font-danafaBold text-sm [word-spacing:2px] md:text-base lg:text-lg'>مبـــاحث دوره</p>
                            <span className='text-xs tracking-wider md:text-sm lg:text-base'>course topics</span>
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex flex-col gap-3 px-2.5'>
                    {chapters.map(chapter => (
                        <Accordion
                            key={chapter.id}
                            {...chapter}
                        />
                    ))}
                </div>
                {!isBought ? (
                    <div className='overlayFadeShadow absolute bottom-0 left-0 flex h-[180px] w-full select-none items-center justify-center bg-gradient-to-b from-transparent to-main/30 backdrop-blur-[2px] lg:h-[175px]'>
                        <button
                            onClick={() => {
                                if (isBought) return
                                if (isInTheBasket) {
                                    SetNotification(prv => [...prv, "alreadyAdded"])
                                } else {
                                    SetNotification(prv => [...prv, "added"])
                                    Dispatch(addCourse(Course))
                                }
                            }}
                            className='btn btn-green flex items-center justify-center gap-1 bg-main px-4 py-2 font-yekaBakh text-xs text-lightWhite hover:bg-mainHover bml:text-sm  lg:text-base  xl:text-lg'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18'
                                height='18'
                                fill='none'
                                viewBox='0 0 25 25'
                                className='scale-75'
                            >
                                <path
                                    fill='#fff'
                                    d='M19.7 16.746H9.707a2.926 2.926 0 01-2.867-2.35L4.87 4.558h-3.1a.975.975 0 110-1.95h3.9a.975.975 0 01.975.78l2.106 10.628a.975.975 0 00.975.78H19.7a.975.975 0 00.975-.77l1.57-7.313a.975.975 0 00-.975-1.18h-.975a.975.975 0 110-1.95h.975a2.925 2.925 0 012.925 3.55l-1.59 7.312a2.926 2.926 0 01-2.905 2.3zM10.545 24.058a2.925 2.925 0 110-5.85 2.925 2.925 0 010 5.85zm0-3.9a.976.976 0 100 1.952.976.976 0 000-1.952zM19.32 24.058a2.925 2.925 0 110-5.85 2.925 2.925 0 010 5.85zm0-3.9a.976.976 0 100 1.952.976.976 0 000-1.952z'
                                ></path>
                                <path
                                    fill='#fff'
                                    d='M17.37 9.433h-5.85a.975.975 0 110-1.95h5.85a.975.975 0 110 1.95z'
                                ></path>
                                <path
                                    fill='#fff'
                                    d='M14.445 12.358a.975.975 0 01-.975-.975v-5.85a.975.975 0 111.95 0v5.85a.975.975 0 01-.975.975z'
                                ></path>
                            </svg>

                            <span className='pt-px'> شرکت در دوره</span>
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
export default CourseTopicsSection
