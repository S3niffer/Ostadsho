import { createSlice } from "@reduxjs/toolkit"

const initialState: T_NavbarItem[] = [
    {
        id: 0,
        title: "دسترسی سریع",
        submenu: [
            { id: 0, link: "/", title: "صفحه اصلی" },
            { id: 1, link: "/Categories/All", title: "صفحه فروشگاه" },
            { id: 2, link: "/basket", title: "صفحه سبد خرید" },
        ],
    },
    {
        id: 1,
        title: "دسته بندی",
        twoColumn: true,
        submenu: [
            { id: 0, title: "وبسایت", link: "/categories/web-programming" },
            { id: 1, title: "سئو", link: "/categories/seo" },
            {
                id: 2,
                title: "هوشی مصنوعی",
                link: "/categories/artificial-intelligence",
            },
            { id: 3, title: "موبایل", link: "/categories/mobile-programming" },
            {
                id: 4,
                title: "شبکه و امنیت",
                link: "/categories/network-and-security",
            },
            {
                id: 5,
                title: "نرم افزار",
                link: "/categories/desktop-programming",
            },
        ],
    },
    {
        id: 2,
        title: "مدرسان",
        submenu: [
            { id: 0, link: "/Instructors/mehrani", title: "محمحد معین مهرانی" },
            { id: 1, link: "/Instructors/madaeni", title: "ایمان مدائنی" },
            { id: 2, link: "/Instructors/mirmirani", title: "جادی میرمیرانی" },
        ],
    },
]

export const navBar = createSlice({
    name: "navBar",
    initialState,
    reducers: {},
})

export const getNavbarItems = (state: RootState) => state.NavbaItems
export default navBar.reducer
