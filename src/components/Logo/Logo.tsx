import { useSelector } from "react-redux"
import lightModeLOGO from "../../Assets/logo/logo-light-horizontal.png"
import darkModeLOGO from "../../Assets/logo/sshowlogo-dark-horizontal.png"
import { getTheme } from "../../App/Slices/Theme"
import { Link } from "react-router-dom"

const Logo = () => {
    const Theme = useSelector(getTheme)

    return (
        <Link
            to='/'
            onClick={() => {
                ;(document.querySelector(".App") as HTMLDivElement).scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }}>
            <div className='logo h-[52px] w-[140px]'>
                <img
                    src={Theme === "LIGHT" ? lightModeLOGO : darkModeLOGO}
                    alt='logo'
                    className='h-full w-full cursor-pointer duration-500 hover:scale-110'
                />
            </div>
        </Link>
    )
}
export default Logo
