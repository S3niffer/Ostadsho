import { configureStore } from "@reduxjs/toolkit"
import Categories from "./Slices/Courses"
import Theme from "./Slices/Theme"
import MenubarVisibility from "./Slices/MenubarVisibility"
import OstadShoComments from "./Slices/OstadshoComment"
import NavbaItems from "./Slices/Navbar"
import ContactInfo from "./Slices/ContactInfo"

export const store = configureStore({
    reducer: {
        Theme,
        Categories,
        MenubarVisibility,
        OstadShoComments,
        NavbaItems,
        ContactInfo,
    },
})
