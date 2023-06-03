const InstructorSection = ({ className }: { className?: React.HTMLAttributes<HTMLDivElement>["className"] }) => {
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
                                src='https://demos.pishtaz-web.com/ostadsho/wp-content/uploads/2022/11/1385361997_fotolia_57841125_subscription_xxl-.jpg'
                                alt='avatar'
                                className='aspect-square w-10 rounded-md xs:w-11 lg:w-14'
                            />
                            <div className='flex flex-col gap-1 text-xs xs:text-sm lg:text-base'>
                                <span>مدرس دوره</span>
                                <span>محمد معین مهرانی</span>
                            </div>
                        </div>
                        <button className='btn btn-green mt-1 p-3 text-xs xs:text-sm lg:text-base'>صفحه مدرس</button>
                    </div>
                    <span className='line-clamp-1 text-sm text-ThirdGray lg:line-clamp-2'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                    </span>
                </div>
            </div>
        </div>
    )
}
export default InstructorSection
