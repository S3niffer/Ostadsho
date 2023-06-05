import { configureStore } from "@reduxjs/toolkit"
import Categories from "./Slices/Courses"
import Theme, { ThemeChanger, getTheme } from "./Slices/Theme"
import MenubarVisibility from "./Slices/MenubarVisibility"
import OstadShoComments from "./Slices/OstadshoComment"
import NavbaItems from "./Slices/Navbar"
import ContactInfo from "./Slices/ContactInfo"
import instructors from "./Slices/Instructors"
import basket, { setBasket } from "./Slices/Basket"
import Bought, { addToBoughtCourses } from "./Slices/Bought"

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
        Bought,
    },
})

// theme Handler
const theme = getTheme(store.getState())
const getThemeromLocalStorage = localStorage.getItem("theme")
if (theme !== getThemeromLocalStorage) {
    store.dispatch(ThemeChanger())
}

// basket Handler
const getBasketItemsLocalStorage = localStorage.getItem("basket")
if (getBasketItemsLocalStorage) {
    store.dispatch(setBasket(JSON.parse(getBasketItemsLocalStorage)))
}

// boughtCourses Handler
const getBoughtCoursesLocalStorage = localStorage.getItem("bought")
if (getBoughtCoursesLocalStorage) {
    store.dispatch(addToBoughtCourses(JSON.parse(getBoughtCoursesLocalStorage)))
}
