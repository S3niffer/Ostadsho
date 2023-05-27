import { createSlice } from '@reduxjs/toolkit'

const initialState: { theme: T_Theme } = {
    theme: 'LIGHT'
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        ThemeChanger: (state) => {
            if (state.theme === 'LIGHT') {
                document.body.classList.add('dark')
                localStorage.setItem('theme', 'DARK')
                state.theme = 'DARK'
            } else {
                document.body.classList.remove('dark')
                localStorage.setItem('theme', 'LIGHT')
                state.theme = 'LIGHT'
            }
        }
    }
})
export const getTheme = (state: RootState) => state.Theme.theme
export const { ThemeChanger } = ThemeSlice.actions
export default ThemeSlice.reducer