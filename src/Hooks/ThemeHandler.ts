import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThemeChanger, getTheme } from "../App/Slices/Theme"

const ThemeHandler = () => {
    const Dispatch = useDispatch()
    const Theme = useSelector(getTheme)

    useMemo(() => {
        let getThemeromLocalStorage = localStorage.getItem("theme")

        if (Theme === getThemeromLocalStorage) return
        Dispatch(ThemeChanger())
    }, [])
    return null
}
export default ThemeHandler
