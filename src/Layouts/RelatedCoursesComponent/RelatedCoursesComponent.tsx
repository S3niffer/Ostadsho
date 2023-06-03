import { Link } from "react-router-dom"

const RelatedCoursesComponent = ({
    Category,
    Category_Name,
    courseName,
}: {
    Category_Name: string
    courseName: string
    Category: T_CategoryItem
}) => {
    return (
        <div className='flex-[.45] rounded-md bg-lightThirdWhite p-5 dark:bg-darkFourthBlack'>
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
                        <p className='font-danafaBold text-sm md:text-base lg:text-lg'> دوره هـای آمـوزشی مرتبط</p>
                        <span className='text-xs  tracking-wider md:text-sm lg:text-base'>related training courses</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-2 rounded-md bg-lightWhite p-3 dark:bg-darkBlack md:grid-cols-2'>
                    {Category?.courses
                        .slice()
                        .filter(Course => Course.courseName !== courseName)
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 2)
                        .map(course => (
                            <Link
                                key={course.id}
                                to={`/${Category_Name}/${course.courseName}`}
                            >
                                <div className='courseBOx group flex w-full cursor-pointer items-center overflow-hidden rounded-md bg-lightFourthWhite hover:bg-main hover:text-lightWhite dark:bg-darkThirdBlack dark:hover:bg-light_green dark:hover:text-main lg:relative'>
                                    <img
                                        src={course.imageSrc}
                                        alt='course'
                                        className='ml-2.5 aspect-[3/2] w-14 xs:w-20 md:w-24 lg:ml-0 lg:aspect-auto lg:h-28 lg:w-full'
                                    />
                                    <p className='whitespace-pre-wrap text-[8px] duration-300 xs:text-[10px] md:text-sm lg:absolute lg:inset-0 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:opacity-0 lg:backdrop-blur-md lg:transition-all lg:hover:text-lightWhite lg:group-hover:opacity-100'>
                                        <span className='inline-block w-full bg-black/20 px-2 py-2 text-center'>
                                            {course.title}
                                        </span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default RelatedCoursesComponent
