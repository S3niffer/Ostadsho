import {
    faMailBulk,
    faMapLocationDot,
    faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons"
import { createSlice } from "@reduxjs/toolkit"

const initialState: T_ContactInfo[] = [
    {
        id: 0,
        icon: faMapLocationDot,
        info: "تهران - خیابان پاسداران - فرعی ۶۵",
    },
    { id: 1, icon: faPhoneFlip, info: "۰۲۱-۰۰۰۰۰۰۰۰ | ۰۲۱-۰۰۰۰۰۰۰" },
    { id: 2, icon: faMailBulk, info: "Info@pishtaz-web.com" },
]

const contactinfo = createSlice({
    name: "contactinfo",
    initialState,
    reducers: {},
})
export const getContactInfos = (state: RootState) => state.ContactInfo
export default contactinfo.reducer
