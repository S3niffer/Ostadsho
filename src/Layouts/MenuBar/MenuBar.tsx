import React, { Dispatch } from "react"
import logo from '../../Assets/logo-light-horizontal.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import SearchInput from "../../components/SearchInput/SearchInput"
import './MenuBar.css'
import { NavbarItems } from "../Navbar/Navbar"
import MenuBarItem from "../../components/MenuBarItem/MenuBarItem"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"


const MenuBar = ({ active, activeHandler }: { active: boolean, activeHandler: Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <React.Fragment>
            <div className={`Menubar fixed z-20 top-0 w-[300px] h-screen p-5 bg-lightWhite dark:bg-darkThirdBlack lg:hidden duration-300 ${active ? 'right-0' : '-right-full'}`}>
                <div className="flex justify-between items-center mb-5">
                    <div className="logo  w-[140px] h-[52px] bg-no-repeat bg-cover ">
                        <img src={logo} alt="logo" className="w-full h-full duration-500 cursor-pointer hover:scale-110" />
                    </div>
                    <div className="btn btn-green block p-2 px-3"
                        onClick={() => {
                            activeHandler(false)
                        }}>
                        <FontAwesomeIcon
                            icon={faClose}
                            className="text-base"
                        />
                    </div>
                </div>
                <SearchInput />
                {
                    NavbarItems.map(item => (
                        <MenuBarItem key={item.id}  {...item} />
                    ))
                }
                <div className="flex justify-between items-center">
                    <p>
                        حالت روز / شب
                    </p>
                    <ThemeChangerBtn />
                </div>
            </div>
            <div onClick={() => {
                activeHandler(false)
            }} className={`overlay fixed top-0 left-0 bg-black/80 w-screen h-screen lg:hidden duration-200 ${active ? 'z-10 opacity-100' : '-z-10 opacity-0'}`}></div>
        </React.Fragment>
    )
}
export default MenuBar