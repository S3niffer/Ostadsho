import { faBars, faBasketShopping, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"
import Navbar from "../Navbar/Navbar"
import MenuBar from "../MenuBar/MenuBar"
import Logo from "../../components/Logo/Logo"
import { useDispatch, useSelector } from "react-redux"
import { getMenubarVisibilityStatus, makeMenubarVisible } from "../../App/Slices/MenubarVisibility"
import { Link, useNavigate } from "react-router-dom"
import { getBasketCourses } from "../../App/Slices/Basket"
import { useEffect, useRef, useState } from "react"

const Header = ({ shadow }: { shadow?: true }) => {
    const MenubarVisibilityStatus = useSelector(getMenubarVisibilityStatus)
    const BasketCourses = useSelector(getBasketCourses)
    const Dispatch = useDispatch()
    const [searchIsActive, setSearchIsActive] = useState(false)
    const [isInputFocoused, SetisInputFocoused] = useState(false)
    const Navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [searchIsActive])
    return (
        <div className={`Header bg-lightWhite p-4 md:py-6 ${shadow ? "shadow-lg" : ""} dark:bg-darkFourthBlack`}>
            <div className='container flex flex-wrap items-center justify-between'>
                <div
                    onClick={() => Dispatch(makeMenubarVisible())}
                    className='btn btn-green flex aspect-square place-items-center lg:hidden'
                >
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
                    <div
                        className='btn btn-green hidden place-items-center lg:flex'
                        onClick={() => setSearchIsActive(prv => !prv)}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='mx-1 aspect-square w-12 text-xl'
                        />
                    </div>
                    <Link to={"/user/basket"}>
                        <div className='btn btn-green group relative flex place-items-center'>
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className='mx-1 aspect-square w-12 text-xl'
                            />
                            <div className='absolute -right-1.5 -top-1.5 flex  aspect-square items-center justify-center  rounded-full bg-main px-2 pt-0.5 text-xs text-lightWhite transition duration-300 group-hover:bg-lightWhite group-hover:text-main dark:group-hover:bg-lightThirdWhite'>
                                {BasketCourses.length}
                            </div>
                        </div>
                    </Link>
                    <div className='hidden lg:block'>
                        <ThemeChangerBtn />
                    </div>
                </div>
            </div>

            <div
                className={`fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-black/70 ${
                    searchIsActive ? "" : "hidden"
                }`}
            >
                <div className='flex w-full justify-center'>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            const value: string = e.currentTarget.search.value
                            const SplitedValue = value.split(" ")
                            const JoinedValue = SplitedValue.join("+")
                            Navigate(`/search?${JoinedValue}`)
                            setSearchIsActive(false)
                            e.currentTarget.search.value = ""
                        }}
                        className='group flex w-full max-w-lg items-center gap-2 rounded-xl bg-lightFourthWhite p-3 dark:bg-darkBlack'
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={`cursor-pointer text-lg ${
                                isInputFocoused ? "text-Gray dark:text-SecondaryGray" : "text-SecondaryGray dark:text-Gray"
                            }`}
                        />
                        <input
                            name='search'
                            type='text'
                            onFocus={() => SetisInputFocoused(true)}
                            onBlur={() => {
                                SetisInputFocoused(false)
                                setSearchIsActive(false)
                            }}
                            className='text-dark w-full bg-transparent outline-none focus:text-Gray placeholder:focus:text-Gray dark:text-SecondaryGray dark:focus:text-SecondaryGray dark:placeholder:focus:text-SecondaryGray'
                            placeholder='جستوجو...'
                            ref={inputRef}
                        />
                    </form>
                </div>
            </div>

            <MenuBar active={MenubarVisibilityStatus} />
        </div>
    )
}
export default Header
