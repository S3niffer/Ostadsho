import { useSelector } from "react-redux"
import { getInstructor } from "../../App/Slices/Instructors"
import { Link } from "react-router-dom"

const InstructorSection = ({
    className,
    instructor,
}: {
    instructor: string
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
}) => {
    const Instructor = useSelector((state: RootState) => getInstructor(state, instructor))

    return (
        <div className={className}>
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
                        <p className='font-danafaBold text-sm md:text-base lg:text-lg'>مـــــــــدرس دوره</p>
                        <span className='text-xs  tracking-widest md:text-sm lg:text-base'>course teacher</span>
                    </div>
                </div>
                <div className='rounded-md bg-lightWhite p-3 dark:bg-darkBlack'>
                    <div className='mb-4 flex items-center justify-between'>
                        <div className='flex items-center gap-1 xs:gap-2.5'>
                            <img
                                src={Instructor?.avatarSrc}
                                alt='avatar'
                                className='aspect-square w-10 rounded-md xs:w-11 lg:w-14'
                            />
                            <div className='flex flex-col gap-1 text-xs xs:text-sm lg:text-base'>
                                <span>مدرس دوره</span>
                                <span>{Instructor?.name}</span>
                            </div>
                        </div>
                        <Link to={`/instructors/${Instructor?.instructorName}`}>
                            <button className='btn btn-green mt-1 p-3 text-xs xs:text-sm lg:text-base'>صفحه مدرس</button>
                        </Link>
                    </div>
                    <span className='line-clamp-1 text-sm text-ThirdGray lg:line-clamp-2'>{Instructor?.desc}</span>
                </div>
            </div>
        </div>
    )
}
export default InstructorSection
