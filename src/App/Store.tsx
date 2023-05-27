import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/Courses'
import theme from './Slices/Theme'
import MenubarVisibility from './Slices/MenubarVisibility'


export const store = configureStore({
    reducer: {
        theme,
        categories,
        MenubarVisibility,
    }
})

