import { createSlice } from "@reduxjs/toolkit"

const initialState: string[] = []

const Bought = createSlice({
    name: "bought",
    initialState: initialState,
    reducers: {
        addToBoughtCourses: (state, action: { type: string; payload: string[] }) => {
            const setOfState = [...new Set([...state, ...action.payload])]
            localStorage.setItem("bought", JSON.stringify(setOfState))
            return setOfState
        },
        removefromBoughtCourses: (state, action: { type: string; payload: string }) => {
            const Result = [...state].filter(name => name !== action.payload)
            localStorage.setItem("bought", JSON.stringify(Result))
            return Result
        },
    },
})

export const getBoughtCourses = (state: RootState) => state.Bought
export const { addToBoughtCourses, removefromBoughtCourses } = Bought.actions
export default Bought.reducer
