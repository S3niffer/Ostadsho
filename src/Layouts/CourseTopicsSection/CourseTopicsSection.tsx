import Accordion from "../../components/Accordion/Accordion"

const CourseTopicsSection = ({ chapters }: { chapters: T_chapter[] }) => {
    return (
        <div className='container mb-3 px-2 md:px-0'>
            <div className='rounded-md bg-lightThirdWhite p-5 dark:bg-darkFourthBlack'>
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
            </div>
        </div>
    )
}
export default CourseTopicsSection
