import React from "react"
import logo from '../../Assets/logo-light-horizontal.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons"
import SearchInput from "../../components/SearchInput/SearchInput"
import './MenuBar.css'

const MenuBar = ({ active }: { active: boolean }) => {
    return (
        <React.Fragment>
            <div className={`Menubar fixed z-20 top-0 w-[300px] h-screen p-5 bg-lightWhite dark:bg-darkThirdBlack duration-300 ${active ? 'right-0' : '-right-full'}`}>
                <div className="flex justify-between items-center mb-5">
                    <div className="logo  w-[140px] h-[52px] bg-no-repeat bg-cover ">
                        <img src={logo} alt="logo" className="w-full h-full duration-500 cursor-pointer hover:scale-110" />
                    </div>
                    <div className="btn btn-green block p-2 px-3">
                        <FontAwesomeIcon
                            icon={faClose}
                            className="text-base"
                        />
                    </div>
                </div>
                <SearchInput />
                <div className="my-5 pb-4 overflow-hidden border border-transparent text-ThirdGray border-b-gray-200">
                    <input type="checkbox" className="absolute -z-10 opacity-0" id="test1" onBlur={(e) => e.target.checked = false} />
                    <div className="icon-container flex justify-between items-center text-base font-semibold ">
                        <label htmlFor="test1">
                            <div className="cursor-pointer">صفحات</div>
                        </label>
                        <label htmlFor="test1">
                            <div className="pt-1 cursor-pointer ">
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="bg-black/10 rotate-180 transition-all duration-300 text-ThirdGray/75 rounded-full p-1 text-sm flex items-center"
                                />
                            </div>
                        </label>
                    </div>
                    <div className="ul-container max-h-0 transition-all duration-1000">
                        <ul className=" flex flex-col gap-1 pt-4">
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                        </ul>
                    </div>
                </div>
                <div className="my-5 pb-4 overflow-hidden border border-transparent text-ThirdGray border-b-gray-200">
                    <input type="checkbox" className="absolute -z-10 opacity-0" id="test2" onBlur={(e) => e.target.checked = false} />
                    <div className="icon-container flex justify-between items-center text-base font-semibold ">
                        <label htmlFor="test2">
                            <div className="cursor-pointer">صفحات</div>
                        </label>
                        <label htmlFor="test2">
                            <div className="pt-1 cursor-pointer ">
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="bg-black/10 rotate-180 transition-all duration-300 text-ThirdGray/75 rounded-full p-1 text-sm flex items-center"
                                />
                            </div>
                        </label>
                    </div>
                    <div className="ul-container max-h-0 transition-all duration-1000">
                        <ul className=" flex flex-col gap-1 pt-4">
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                            <li className="cursor-pointer hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2 border border-lightSecondaryWhite">برنامه نویسی موبایل</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`overlay fixed top-0 left-0 bg-black/80 w-screen h-screen  duration-200 ${active ? 'z-10 opacity-100' : '-z-10 opacity-0'}`}></div>
        </React.Fragment>
    )
}
export default MenuBar