import Lottie from "lottie-react"
import HeroSEctionSvg from '../../Assets/SVGHeroSectionAnamation.json'
import { Link } from "react-router-dom"

const HeroSection = () => {


    return (
        <div className="HeroSection mt-5 bml:mt-8 container mx-auto flex justify-between items-center flex-col md:flex-row lg:flex-row-reverse pb-12">
            <div className="" >
                <Lottie animationData={HeroSEctionSvg} className="mx-auto w-full -translate-y-12 2xs:-translate-y-5 md:w-[350px] lg:w-[470px] xl:w-[580px]" />
            </div>
            <div className="flex flex-col gap-2 bml:gap-3 lg:gap-5 xl:gap-7 text-Gray dark:text-lightWhite px-4 md:px-0 md:mt-8">
                <span className="text-lg bml:text-[24px] lg:text-[27px] xl:text-3xl font-danafaBold font-[400]">
                    داستان برنامه‌نویس شدنت از اینجا شروع میشه!
                </span>
                <span className="text-sm leading-8 font-danafa text-ThirdGray dark:text-lightSecondaryWhite lg:text-[18px] xl:text-xl">
                    یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید، بقیه‌اش با  استاد شو
                </span>
                <div className="flex gap-2 flex-col  md:flex-row font-yekaBakhBold">
                    <div className="btn btn-green group flex items-center justify-between bg-main text-lightWhite hover:bg-light_green hover:text-main relative md:pe-7 md:pr-4 md:text-sm bml:text-base bml:px-12 lg:py-5 lg:pe-10 lg:pr-8 lg:text-lg ">
                        <Link to='/categories/All' className="mx-auto">
                            شروع یادگیری برنامه نویسی
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 81 70"
                            className="absolute left-1 top-1/3 lg:top-[35%] xl:top-[38%]"
                        >
                            <path
                                className="fill-lightWhite group-hover:fill-main"
                                fillRule="evenodd"
                                d="M18.732 33.232a2.5 2.5 0 000 3.536L32.066 50.1a2.5 2.5 0 103.535-3.535L26.535 37.5H60.5a2.5 2.5 0 000-5H26.535l9.066-9.066a2.5 2.5 0 00-3.535-3.535L18.732 33.232z"
                                clipRule="evenodd"
                                opacity="0.4"
                            />
                            <path
                                className="fill-lightWhite group-hover:fill-main"
                                d="M18.732 36.768a2.5 2.5 0 010-3.536L32.066 19.9a2.5 2.5 0 013.535 3.536l-11.67 11.557L35.6 46.566a2.5 2.5 0 01-3.535 3.535L18.732 36.768z"
                            />
                        </svg>
                    </div>
                    <div className="btn btn-green md:px-4 md:text-sm bml:text-base bml:px-12 lg:py-5 lg:px-10 lg:text-lg ">
                        <span onClick={() => { (document.querySelector('.App') as HTMLDivElement).scrollTo({ top: 5000, behavior: 'smooth' }) }} className="block text-center md:flex md:place-items-center">
                            درباره تیم استادشو
                        </span>
                    </div>
                </div>
                <ul className="flex flex-col md:flex-row flex-wrap mt-4 gap-y-6 md:gap-y-8 font-danafaBold font-normal text-[12px] xs:text-sm md:text-[12px] bml:text-sm lg:text-base xl:text-lg text-ThirdGray dark:text-lightSecondaryWhite">
                    <li className="md:w-1/2 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            fill="none"
                            className="ml-2"
                            viewBox="0 0 41 41"
                        >
                            <circle
                                cx="21.416"
                                cy="21.552"
                                r="13.828"
                                fill="#E81C4D"
                                opacity="0.15"
                                transform="rotate(-36.651 21.416 21.552)"
                            ></circle>
                            <path
                                fill="#E81C4D"
                                fillRule="evenodd"
                                d="M19.043 3.459C16.17 1.906 14.305.973 12.38.973c-1.926 0-3.79.933-6.664 2.486l-.052.028c-1.42.768-2.551 1.379-3.322 1.899-.39.263-.742.539-1.003.839-.264.303-.502.709-.502 1.212v7.388a.923.923 0 101.847 0V9.71c.517.325 1.157.685 1.906 1.095-.06.742-.059 1.702-.059 2.941v.154c0 4.617 1.38 5.54 7.817 5.54 6.034 0 7.881-.923 7.881-5.54 0-1.312 0-2.32-.066-3.092.928-.507 1.689-.938 2.255-1.32.39-.264.742-.54 1.003-.84.264-.303.502-.708.502-1.212 0-.503-.238-.909-.502-1.212-.261-.3-.613-.576-1.003-.84-.77-.52-1.901-1.13-3.322-1.898l-.052-.028zm-.678 8.321c-2.498 1.334-4.216 2.121-5.986 2.121-1.77 0-3.489-.788-5.988-2.122a94.212 94.212 0 00-.014 2.122c0 2.276.382 2.76.71 2.99.245.173.704.37 1.603.509.893.137 2.074.195 3.657.195 1.478 0 2.613-.058 3.494-.195.885-.137 1.389-.337 1.687-.535.413-.275.853-.82.853-2.964 0-.88-.001-1.57-.017-2.12zM3.374 6.916c-.342.231-.539.4-.644.521.105.12.302.29.644.521.685.463 1.734 1.03 3.218 1.833 2.984 1.613 4.416 2.263 5.786 2.263 1.37 0 2.802-.65 5.786-2.263 1.484-.802 2.533-1.37 3.218-1.833.342-.23.539-.4.644-.52-.105-.121-.302-.29-.644-.522-.685-.462-1.734-1.03-3.218-1.832C15.181 3.47 13.75 2.82 12.38 2.82c-1.37 0-2.802.65-5.786 2.264-1.484.802-2.533 1.37-3.218 1.832zm18.714.606v-.003.003zm0-.167v-.002.002zm-19.419 0a.016.016 0 01-.001-.002l.001.002z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        بیش از 80 دوره آموزشی
                    </li>
                    <li className="mr-auto md:w-1/2 md:mr-0 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="40"
                            fill="none"
                            className="ml-2"
                            viewBox="0 0 39 40"
                        >
                            <path
                                fill="#98A3B8"
                                d="M15.583 10.083a.917.917 0 000 1.834h1.834a.917.917 0 100-1.834h-1.834z"
                            ></path>
                            <path
                                fill="#98A3B8"
                                d="M19.955 6.417h-4.33a4.66 4.66 0 00-3.27 1.342 4.546 4.546 0 000 6.482c.43.426.939.763 1.5.994a4.66 4.66 0 001.77.348h4.33c.094-.542.164-1.15.212-1.833h-4.542a2.797 2.797 0 01-1.962-.805A2.747 2.747 0 0112.85 11a2.728 2.728 0 01.813-1.944 2.777 2.777 0 011.962-.806h4.542a18.41 18.41 0 00-.212-1.833z"
                            ></path>
                            <path
                                fill="#98A3B8"
                                fillRule="evenodd"
                                d="M0 11c0 9.058 1.942 11 11 11s11-1.942 11-11c0-9.059-1.942-11-11-11C1.941 0 0 1.942 0 11zm1.833 0c0 2.223.122 3.884.402 5.143.275 1.238.678 1.971 1.164 2.458.487.486 1.22.89 2.458 1.164 1.26.28 2.92.402 5.143.402s3.884-.122 5.143-.402c1.238-.275 1.971-.678 2.458-1.164.486-.487.89-1.22 1.164-2.458.28-1.26.402-2.92.402-5.143s-.122-3.884-.402-5.143c-.275-1.237-.678-1.971-1.164-2.458-.487-.486-1.22-.89-2.458-1.164-1.26-.28-2.92-.402-5.143-.402s-3.884.122-5.143.402C4.62 2.51 3.886 2.913 3.4 3.399c-.486.487-.89 1.22-1.164 2.458-.28 1.26-.402 2.92-.402 5.143z"
                                clipRule="evenodd"
                            ></path>
                            <circle
                                cx="19.348"
                                cy="20.348"
                                r="13.828"
                                fill="#98A3B8"
                                opacity="0.15"
                                transform="rotate(-33.86 19.348 20.348)"
                            ></circle>
                        </svg>
                        ضمانت بازگشت وجه
                    </li>
                    <li className="md:w-1/2 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                            className="ml-2"
                        >
                            <circle
                                cx="19.721"
                                cy="19.887"
                                r="13.828"
                                fill="#9018EE"
                                opacity="0.15"
                                transform="rotate(-36.651 19.72 19.887)"
                            ></circle>
                            <path
                                stroke="#9018EE"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 13c0 2.448.132 4.346.462 5.827.326 1.47.833 2.465 1.54 3.172.706.706 1.702 1.213 3.171 1.54 1.48.328 3.38.461 5.827.461 2.448 0 4.346-.133 5.827-.462 1.47-.326 2.465-.833 3.172-1.54.706-.706 1.213-1.702 1.54-3.171.328-1.48.461-3.38.461-5.827 0-2.448-.133-4.346-.462-5.827-.326-1.47-.833-2.465-1.54-3.172-.706-.706-1.702-1.213-3.171-1.54C18.347 2.133 16.447 2 14 2c-2.448 0-4.346.132-5.827.462-1.47.326-2.465.833-3.172 1.54-.706.706-1.213 1.702-1.54 3.171C3.133 8.653 3 10.553 3 13z"
                            ></path>
                            <path
                                stroke="#9018EE"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.158 9.182l1.761-1.848a1.092 1.092 0 011.52-.052l3.219 2.934c.434.396.458 1.06.053 1.485l-1.893 1.985m-4.66-4.504l-4.87 5.106a1.037 1.037 0 00-.286.786l.2 2.945c.038.553.51.983 1.077.981l3.02-.011c.296-.001.58-.122.782-.335l4.737-4.968m-4.66-4.504l4.66 4.504"
                            ></path>
                        </svg>
                        یادگیری با تمرین و آزمون
                    </li>
                    <li className="mr-auto md:w-1/2 md:mr-0 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="40"
                            fill="none"
                            viewBox="0 0 41 40"
                            className="ml-2"
                        >
                            <path
                                stroke="#51B6FF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.385"
                                d="M13.96 6.542a7.359 7.359 0 016.502 6.493M13.96 9.814a4.087 4.087 0 013.233 3.232"
                            ></path>
                            <path
                                fillRule="evenodd"
                                stroke="#51B6FF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.385"
                                d="M10.894 15.75c3.683 3.683 4.519-.577 6.864 1.767 2.261 2.26 3.562 2.713.696 5.577-.359.288-2.639 3.758-10.65-4.253C-.21 10.832 3.256 8.549 3.545 8.19c2.871-2.872 3.317-1.564 5.578.696 2.345 2.345-1.914 3.183 1.77 6.866z"
                                clipRule="evenodd"
                            ></path>
                            <circle
                                cx="21.286"
                                cy="19.887"
                                r="13.828"
                                fill="#51B6FF"
                                opacity="0.15"
                                transform="rotate(-36.651 21.286 19.887)"
                            ></circle>
                        </svg>
                        پشتیبانی ۲۴ساعته
                    </li>
                </ul>
            </div>
        </div >
    )
}
export default HeroSection