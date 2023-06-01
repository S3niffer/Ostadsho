const CourseTopPage = ({ Course }: { Course: T_Course }) => {
    return (
        <div className='courseMain container px-2 py-4 md:px-0'>
            <div className='flex flex-col items-center gap-2 lg:flex-row'>
                <div className='w-full'>
                    <img
                        src={Course.imageSrc}
                        alt='product'
                        className='aspect-video w-full rounded-md lg:w-[calc(100%-0.5rem)]'
                    />
                </div>
                <div className='mt-4 w-full rounded-md bg-lightThirdWhite dark:bg-darkFourthBlack lg:mt-0 lg:aspect-video lg:w-[calc(100%-0.5rem)]'>
                    <div className='flex h-[350px] flex-col justify-between p-8 xs:h-[300px] md:h-60 lg:h-full lg:pt-10 xl:pt-12'>
                        <div className='font-danafaBold text-xl text-Gray dark:text-lightSecondaryWhite lg:text-2xl'>
                            {Course.title}
                        </div>
                        <div className='text-justify text-xs text-FourthGray bml:text-sm lg:text-[15px] xl:text-lg'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                        </div>
                        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                            <div className='btn btn-green w-full text-center bg-lightWhite text-xs text-Gray  hover:bg-lightWhite hover:text-Gray dark:bg-darkBlack dark:text-lightThirdWhite bml:text-sm lg:w-52 lg:text-base xl:w-64 xl:text-lg'>
                                قیمت:{" "}
                                {Course.price ? (
                                    <>
                                        {Course.discountPercent ? (
                                            <span>
                                                <span className='discountPrice relative select-none text-sm text-FifthGray'>
                                                    {Course.price.toLocaleString("en-us")}
                                                </span>{" "}
                                                <span className='font-yekaBakhBold'>
                                                    {(Course.price * ((100 - Course.discountPercent) / 100)).toLocaleString(
                                                        "en-us"
                                                    )}
                                                </span>
                                            </span>
                                        ) : (
                                            <span className='font-yekaBakhBold'>{Course.price.toLocaleString("en-us")}</span>
                                        )}{" "}
                                        تومان
                                    </>
                                ) : (
                                    <span>رایــگان</span>
                                )}
                            </div>
                            <button className='btn btn-green w-full bg-main p-0 font-yekaBakh text-xs text-lightWhite transition-all duration-300 hover:translate-y-px hover:bg-[#327949] bml:text-sm lg:w-44 lg:text-base xl:w-56 xl:text-lg'>
                                <div className='flex h-12 items-center justify-center px-7 py-3'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='15'
                                        height='15'
                                        fill='none'
                                        className='mb-px ml-1'
                                        viewBox='0 0 25 25'
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
                                    <span> شرکت در دوره</span>{" "}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseTopPage
