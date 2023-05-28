import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import SearchInput from "../../components/SearchInput/SearchInput"
import MenuBarItem from "../../components/MenuBarItem/MenuBarItem"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"
import Logo from "../../components/Logo/Logo"
import { useDispatch, useSelector } from "react-redux"
import { makeMenubarHidden } from "../../App/Slices/MenubarVisibility"
import { getNavbarItems } from "../../App/Slices/Navbar"

const MenuBar = ({ active }: { active: boolean }) => {
    const NavbarItems = useSelector(getNavbarItems)

    const Dispatch = useDispatch()

    return (
        <React.Fragment>
            <div
                className={`Menubar fixed top-0 z-20 h-screen w-[280px] bg-lightWhite p-5 duration-300 dark:bg-darkFourthBlack 2xs:w-[300px] lg:hidden ${
                    active ? "right-0" : "-right-full"
                }`}>
                <div>
                    <div className='mb-5 flex items-center justify-between'>
                        <Logo />
                        <div
                            className='btn btn-green flex aspect-square h-10 items-center justify-center'
                            onClick={() => {
                                Dispatch(makeMenubarHidden())
                            }}>
                            <FontAwesomeIcon
                                icon={faClose}
                                className='text-base'
                            />
                        </div>
                    </div>
                    <SearchInput />
                </div>
                <div className='LTR pr-Inscroll max-h-[calc(100%-190px)] overflow-y-auto'>
                    <div className='RTL'>
                        {NavbarItems.map((item, index) => {
                            return (
                                <MenuBarItem
                                    key={item.id}
                                    {...item}
                                    lasindex={NavbarItems.length === ++index ? true : undefined}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='flex items-center justify-between border border-transparent border-t-gray-200 pt-2'>
                    <p>حالت روز / شب</p>
                    <ThemeChangerBtn />
                </div>
            </div>
            <div
                onClick={() => {
                    Dispatch(makeMenubarHidden())
                }}
                className={`overlay fixed left-0 top-0 h-screen w-screen bg-black/80 duration-200 lg:hidden ${
                    active ? "z-10 opacity-100" : "-z-10 opacity-0"
                }`}></div>
        </React.Fragment>
    )
}
export default MenuBar
