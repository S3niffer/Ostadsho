import {
    faBars,
    faBasketShopping,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn";
import Navbar from "../Navbar/Navbar";
import MenuBar from "../MenuBar/MenuBar";
import Logo from "../../components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getMenubarVisibilityStatus, makeMenubarVisible } from "../../App/Slices/MenubarVisibility";



const Header = ({ shadow }: { shadow?: true }) => {

    const MenubarVisibilityStatus = useSelector(getMenubarVisibilityStatus)
    const Dispatch = useDispatch()

    return (
        <div className={`Header p-4 md:py-6 bg-lightWhite ${shadow ? 'shadow-lg' : ''} dark:bg-darkFourthBlack`}>
            <div className="container flex justify-between items-center flex-wrap">
                <div
                    onClick={() => Dispatch(makeMenubarVisible())}
                    className="btn btn-green flex place-items-center lg:hidden aspect-square">
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-xl w-12"
                    />
                </div>
                <div className="right-section flex gap-16 items-center">
                    <Logo />
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
            <MenuBar active={MenubarVisibilityStatus} />
        </div>
    );
};
export default Header;
