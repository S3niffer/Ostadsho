import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    status: boolean
} = {
    status: false,
}

const MenubarVisibility = createSlice({
    name: "MenubarVisibility",
    initialState,
    reducers: {
        makeMenubarVisible: (state) => {
            state.status = true
        },
        makeMenubarHidden: (state) => {
            state.status = false
        },
    },
})

export const getMenubarVisibilityStatus = (state: RootState) =>
    state.MenubarVisibility.status
export const { makeMenubarVisible, makeMenubarHidden } =
    MenubarVisibility.actions
export default MenubarVisibility.reducer
