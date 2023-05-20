import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Slices/Theme'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})

