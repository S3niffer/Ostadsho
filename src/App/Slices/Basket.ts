import { createSlice } from "@reduxjs/toolkit"

const initialState: T_Course[] = []

const Basket = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            const find = state.find(course => course.courseName === action.payload.courseName)
            if (find) {
                localStorage.setItem("basket", JSON.stringify(state))
                return state
            }
            state.push(action.payload)
            localStorage.setItem("basket", JSON.stringify(state))
        },
        removeCourse: (state, action) => {
            return state.filter(course => course.courseName !== action.payload)
        },
        setBasket: (state, action: { type: string; payload: T_Course[] }) => {
            return action.payload
        },
        clearBasket: () => {
            localStorage.setItem("basket", JSON.stringify([]))
            return []
        },
    },
})

export const getBasketCourses = (state: RootState) => state.basket
export const { addCourse, removeCourse, clearBasket, setBasket } = Basket.actions
export default Basket.reducer
