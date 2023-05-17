import React, { Dispatch } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import SearchInput from "../../components/SearchInput/SearchInput"
import { NavbarItems } from "../Navbar/Navbar"
import MenuBarItem from "../../components/MenuBarItem/MenuBarItem"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"
import Logo from "../../components/Logo/Logo";


const MenuBar = ({ active, activeHandler }: { active: boolean, activeHandler: Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <React.Fragment>
            <div className={`Menubar fixed z-20 top-0 w-[280px] 2xs:w-[300px] h-screen p-5 bg-lightWhite dark:bg-darkFourthBlack lg:hidden duration-300 ${active ? 'right-0' : '-right-full'}`}>
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <Logo />
                        <div className="btn btn-green h-10 aspect-square flex justify-center items-center"
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
                </div>
                <div className="max-h-[calc(100%-190px)] overflow-y-auto LTR pr-Inscroll">
                    <div className="RTL">
                        {
                            NavbarItems.map(item => (
                                <MenuBarItem key={item.id}  {...item} />
                            ))
                        }
                    </div>
                </div>
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