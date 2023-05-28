import { faBars, faBasketShopping, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"
import Navbar from "../Navbar/Navbar"
import MenuBar from "../MenuBar/MenuBar"
import Logo from "../../components/Logo/Logo"
import { useDispatch, useSelector } from "react-redux"
import { getMenubarVisibilityStatus, makeMenubarVisible } from "../../App/Slices/MenubarVisibility"

const Header = ({ shadow }: { shadow?: true }) => {
    const MenubarVisibilityStatus = useSelector(getMenubarVisibilityStatus)
    const Dispatch = useDispatch()

    return (
        <div className={`Header bg-lightWhite p-4 md:py-6 ${shadow ? "shadow-lg" : ""} dark:bg-darkFourthBlack`}>
            <div className='container flex flex-wrap items-center justify-between'>
                <div
                    onClick={() => Dispatch(makeMenubarVisible())}
                    className='btn btn-green flex aspect-square place-items-center lg:hidden'>
                    <FontAwesomeIcon
                        icon={faBars}
                        className='w-12 text-xl'
                    />
                </div>
                <div className='right-section flex items-center gap-16'>
                    <Logo />
                    <div className='hidden lg:block'>
                        <Navbar />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='btn btn-green hidden place-items-center lg:flex'>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='mx-1 aspect-square w-12 text-xl'
                        />
                    </div>
                    <div className='btn btn-green flex place-items-center'>
                        <FontAwesomeIcon
                            icon={faBasketShopping}
                            className='mx-1 aspect-square w-12 text-xl'
                        />
                    </div>
                    <div className='hidden lg:block'>
                        <ThemeChangerBtn />
                    </div>
                </div>
            </div>
            <MenuBar active={MenubarVisibilityStatus} />
        </div>
    )
}
export default Header
