import { useSelector, useDispatch } from "react-redux"
import { ThemeChanger, getTheme } from "../../App/Slices/Theme"

const ThemeChangerBtn = () => {
    const Dispatch = useDispatch()
    const Theme = useSelector(getTheme)

    return (
        <div
            className='btn h-12 w-16 bg-SecondaryGray px-[14px] py-[6px] duration-500 dark:bg-main'
            onClick={() => {
                Dispatch(ThemeChanger())
            }}
        >
            <span
                className={`block h-full w-[24px] rounded-md bg-white duration-500 
                ${Theme === "DARK" ? "translate-x-2" : "-translate-x-5"}`}
            ></span>
        </div>
    )
}
export default ThemeChangerBtn
