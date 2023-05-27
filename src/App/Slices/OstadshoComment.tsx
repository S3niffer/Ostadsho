import { createSlice } from "@reduxjs/toolkit"
import avatr from "../../Assets/avatars/male2016108394376874.jpg"
import avatr1 from "../../Assets/avatars/male1084675750580.jpg"
import avatr2 from "../../Assets/avatars/female20161025239720032.jpg"

const initialState: T_Comment[] = [
    {
        id: 0,
        name: "نگار عبدی",
        imgSrc: avatr2,
        comment:
            "برنامه‌نویسی کارخانه‌ی تبدیل ایده به واقعیت است که با کمک آموزش‌های جذاب و کاربردی استاد شو، میتوانید مالک این کارخانه باشید. ",
    },
    {
        id: 1,
        name: "محمد حسن زاده",
        imgSrc: avatr,
        comment:
            "استاد شو شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی، بروز و پروژه محور متناسب با نیاز بازار داخلی و جهانی ارائه میده! دمتون گرم ",
    },
    {
        id: 2,
        name: "علیرضا محمدی",
        imgSrc: avatr1,
        comment:
            "به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها استاد شو رو نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه راست چین تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی کاربردی بوده.تبریک میگم به محمد معین مهرانی عزیز برای دوره های ارزشمندی که خلق کرده.",
    },
]

export const OstadShoComments = createSlice({
    name: "osdashshoCommnent",
    initialState,
    reducers: {},
})

export const getAllOstadshoComment = (state: RootState) => state.OstadShoComments
export default OstadShoComments.reducer
