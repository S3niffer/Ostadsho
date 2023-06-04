import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faBrain, faDesktop, faMobileAndroidAlt, faNetworkWired, faS } from "@fortawesome/free-solid-svg-icons"
import { createSelector, createSlice } from "@reduxjs/toolkit"

// import images
import HTML from "../../Assets/Courses/HTML.png"
import CSS from "../../Assets/Courses/CSS.png"
import JAVASCRIPT from "../../Assets/Courses/Javascript.png"
import ReactJS from "../../Assets/Courses/React.png"
import NODEJS from "../../Assets/Courses/nodeJs-min.jpg"
import api_Nodejs from "../../Assets/Courses/Api.png"
import Seo from "../../Assets/Courses/Seo.jpg"
import ai from "../../Assets/Courses/ai-course.jpg"
import ml from "../../Assets/Courses/mL.jfif"
import mboileIntro from "../../Assets/Courses/mobiledevelopingintroduction.jfif"
import kotlin from "../../Assets/Courses/kotlin.png"
import reactNative from "../../Assets/Courses/reactNativecourse.jpg"
import swift from "../../Assets/Courses/swiftCourse.jpg"
import cisco from "../../Assets/Courses/cisco.jpg"
import networkPlus from "../../Assets/Courses/networkPlus.jpg"
import networksecurity from "../../Assets/Courses/network-security-course.jpg"
import javadesktop from "../../Assets/Courses/Java-Programming-Training-For-Beginners.jpg"
import csharpDesktop from "../../Assets/Courses/developingDesktopwithCsharp.png"

const initialState: T_CategoryItem[] = [
    {
        id: 0,
        categoryName: "web-programming",
        title: "وبسایت",
        icon: faJsSquare,
        courses: [
            {
                id: 0,
                title: "آموزش کدنویسی با HTML",
                price: 0,
                imageSrc: HTML,
                courseName: "html",
                categoryName: "web-programming",
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 1,
                title: "آموزش استایل دهی با Css",
                price: 0,
                imageSrc: CSS,
                courseName: "css",
                categoryName: "web-programming",
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "آموزش پروژه محور JS",
                price: 1_200_000,
                imageSrc: JAVASCRIPT,
                courseName: "javascript",
                categoryName: "web-programming",
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 3,
                title: "آموزش پروژه محور ReactJS",
                price: 2_600_000,
                imageSrc: ReactJS,
                courseName: "react-js",
                categoryName: "web-programming",
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 4,
                title: "آموزش تخصصی NodeJS",
                price: 2_400_000,
                imageSrc: NODEJS,
                courseName: "node-js",
                discountPercent: 65,
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
                categoryName: "web-programming",
            },
            {
                id: 5,
                title: "آموزش Api نویسی",
                price: 356_000,
                imageSrc: api_Nodejs,
                courseName: "api-node-js",
                categoryName: "web-programming",
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        categoryName: "seo",
        title: "سئو",
        icon: faS,
        courses: [
            {
                id: 0,
                title: "آموزش کاربردی Seo(سئو)",
                price: 550_000,
                imageSrc: Seo,
                courseName: "seo-course",
                categoryName: "seo",
                instructorName: "madaeny",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        categoryName: "artificial-intelligence",
        title: "هوشی مصنوعی",
        icon: faBrain,
        courses: [
            {
                id: 0,
                title: "دوره آشنایی با AI",
                price: 0,
                imageSrc: ai,
                courseName: "introduction-ai",
                categoryName: "artificial-intelligence",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 1,
                title: "آموزش مقدماتی ML",
                price: 886_000,
                imageSrc: ml,
                courseName: "machinelearning-basic",
                categoryName: "artificial-intelligence",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        categoryName: "mobile-programming",
        title: "موبایل",
        icon: faMobileAndroidAlt,
        courses: [
            {
                id: 0,
                title: "مقدمه ای بر توسعه اپلیکیشن موبایل",
                price: 0,
                imageSrc: mboileIntro,
                courseName: "introduction-mobileprogramming",
                categoryName: "mobile-programming",
                instructorName: "madaeny",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 1,
                title: "توسعه اپلیکیشن با Kotlin",
                price: 2_000_000,
                imageSrc: kotlin,
                courseName: "kotlin-developing",
                categoryName: "mobile-programming",
                instructorName: "madaeny",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "توسعه اپلیکیشن با Native",
                price: 1_500_000,
                imageSrc: reactNative,
                courseName: "natiive-developing",
                discountPercent: 23,
                instructorName: "saeedirad",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
                categoryName: "mobile-programming",
            },
            {
                id: 3,
                title: "توسعه اپلیکیشن با Swift",
                price: 2_000_000,
                imageSrc: swift,
                courseName: "swift-developing",
                categoryName: "mobile-programming",
                instructorName: "madaeny",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        categoryName: "network-and-security",
        title: "شبکه و امنیت",
        icon: faNetworkWired,
        courses: [
            {
                id: 0,
                title: "آموزش Cisco ",
                price: 0,
                imageSrc: cisco,
                courseName: "cisco",
                categoryName: "network-and-security",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 1,
                title: "آموزش Network+",
                price: 250_000,
                imageSrc: networkPlus,
                courseName: "network-plus",
                categoryName: "network-and-security",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "آموزش مبانی امنیت شبکه",
                price: 365_000,
                imageSrc: networksecurity,
                courseName: "fundamental-network-and-security",
                categoryName: "network-and-security",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        categoryName: "desktop-programming",
        title: "نرم افزار",
        icon: faDesktop,
        courses: [
            {
                id: 0,
                title: "مقدمه برنامه نویسی دسکتاپ با Java",
                price: 365_000,
                imageSrc: javadesktop,
                courseName: "desktop-with-java",
                categoryName: "desktop-programming",
                instructorName: "mirmirani",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
            {
                id: 1,
                title: "توسعه نرم افزار دسکتاپ با #C",
                price: 365_000,
                imageSrc: csharpDesktop,
                courseName: "desktop-with-csharp",
                categoryName: "desktop-programming",
                instructorName: "madaeny",
                chapters: [
                    {
                        id: 1,
                        name: "سطح مقدماتی",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 2,
                        name: "سطح متوسط",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                    {
                        id: 3,
                        name: "سطح پیشرفته",
                        episodes: [
                            { id: 1, title: "قسمت اول", link: "" },
                            { id: 2, title: "قسمت دوم", link: "" },
                            { id: 3, title: "قسمت سوم", link: "" },
                        ],
                    },
                ],
            },
        ],
    },
]

export const categories = createSlice({
    name: "categories",
    initialState,
    reducers: {},
})

// help to get the catories from store in useSelector
export const getCategories = (state: RootState) => state.Categories

// find and get all courses like this getCourses(RootState) * result only changes when the categories updated(getCategories returns new value)
export const getCourses = createSelector([getCategories], categories => {
    let All_Courses: T_Course[] = []
    categories.forEach(category => {
        category.courses.forEach(course => {
            All_Courses.push(course)
        })
    })
    return All_Courses.sort(() => 0.5 - Math.random())
})

// get one specific catgory like this getCategory(RootState,categoryName) *result changed when getCategories returns new value or request new categoryName
export const getCategory = createSelector(
    [getCategories, (RootState: RootState, categoryName: string) => categoryName],
    (categories, categoryName) => categories.find(category => category.categoryName === categoryName)
)

// get specific Course like this getCourse(RootState,categoryName,courseName) *result changed when getCategory returns new value or request new courseName
export const getCourse = createSelector(
    [getCategory, (RootState: RootState, categoryName: string, courseName: string) => courseName],
    (categoryName, courseName) => categoryName?.courses.find(course => course.courseName === courseName)
)
export default categories.reducer
