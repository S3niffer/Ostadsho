import { useSelector, useDispatch } from 'react-redux'
import { ThemeChanger, getTheme } from "../../App/Slices/Theme";
import { useMemo } from 'react'

const ThemeChangerBtn = () => {

    const Dispatch = useDispatch()
    const Theme = useSelector(getTheme)

    useMemo(() => {
        let getThemeromLocalStorage = localStorage.getItem('theme')

        if (Theme === getThemeromLocalStorage) return

        Dispatch(ThemeChanger())
    }, [])

    return (
        <div
            className="btn bg-SecondaryGray dark:bg-main duration-500 w-16 h-12 py-[6px] px-[14px]"
            onClick={() => {
                Dispatch(ThemeChanger())
            }}
        >
            <span
                className={`bg-white block w-[24px] h-full duration-500 rounded-md 
                ${Theme === "DARK" ? "translate-x-2" : "-translate-x-5"}`}
            ></span>
        </div>
    );
};
export default ThemeChangerBtn;
