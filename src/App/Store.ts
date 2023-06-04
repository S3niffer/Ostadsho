import { configureStore } from "@reduxjs/toolkit"
import Categories from "./Slices/Courses"
import Theme, { ThemeChanger, getTheme } from "./Slices/Theme"
import MenubarVisibility from "./Slices/MenubarVisibility"
import OstadShoComments from "./Slices/OstadshoComment"
import NavbaItems from "./Slices/Navbar"
import ContactInfo from "./Slices/ContactInfo"
import instructors from "./Slices/Instructors"
import basket from "./Slices/Basket"

export const store = configureStore({
    reducer: {
        Theme,
        Categories,
        MenubarVisibility,
        OstadShoComments,
        NavbaItems,
        ContactInfo,
        instructors,
        basket,
    },
})

// theme Handler
const theme = getTheme(store.getState())
let getThemeromLocalStorage = localStorage.getItem("theme")
if (theme !== getThemeromLocalStorage) {
    store.dispatch(ThemeChanger())
}
