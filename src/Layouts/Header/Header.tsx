import image from "../../Assets/logo-light-horizontal.png";
import {
    faBars,
    faBasketShopping,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn";
import Navbar from "../Navbar/Navbar";
const Header = () => {
    return (
        <div className="Header  px-4 py-8 bg-lightWhite shadow-lg dark:bg-darkThirdBlack">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <div className="btn btn-green lg:hidden">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="mt-1 text-xl w-12 aspect-square"
                    />
                </div>
                <div className="right-section flex gap-16 items-center">
                    <div className="logo  w-[140px] h-[52px] bg-no-repeat bg-cover ">
                        <img src={image} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="hidden lg:block">
                        <Navbar />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="btn btn-green hidden lg:block px-0">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="mx-1 text-xl w-12 aspect-square"
                        />
                    </div>
                    <div className="btn btn-green px-0">
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
        </div>
    );
};
export default Header;
