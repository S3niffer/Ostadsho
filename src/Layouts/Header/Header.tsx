import image from "../../Assets/logo-light-horizontal.png";
import {
    faBars,
    faBasketShopping,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn";
import Navbar from "../Navbar/Navbar";
import MenuBar from "../MenuBar/MenuBar";
import { useState } from "react";
const Header = () => {

    const [showMenuBar, setShowMenuBar] = useState(false)

    return (
        <div className="Header px-4 py-8 bg-lightWhite shadow-lg mb-8 dark:bg-darkThirdBlack">
            <div className="container flex justify-between items-center flex-wrap">
                <div
                    onClick={() => setShowMenuBar(true)}
                    className="btn btn-green flex place-items-center lg:hidden aspect-square">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-xl w-12"
                    />
                </div>
                <div className="right-section flex gap-16 items-center">
                    <div className="logo  w-[140px] h-[52px] bg-no-repeat bg-cover ">
                        <img src={image} alt="logo" className="w-full h-full duration-500 cursor-pointer hover:scale-110" />
                    </div>
                    <div className="hidden lg:block">
                        <Navbar />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-green hidden lg:flex place-items-center">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="mx-1 text-xl w-12 aspect-square"
                        />
                    </div>
                    <div className="btn btn-green flex place-items-center">
                        <FontAwesomeIcon
                            icon={faBasketShopping}
                            className="mx-1 text-xl w-12 aspect-square"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <ThemeChangerBtn />
                    </div>
                </div>
            </div>
            <MenuBar active={showMenuBar} activeHandler={setShowMenuBar} />
        </div>
    );
};
export default Header;
