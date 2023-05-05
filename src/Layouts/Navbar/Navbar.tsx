import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <ul className="flex gap-5 font text-base text-Gray dark:text-lightWhite items-center pt-2">
            <li className="group relative cursor-pointer p-3 rounded-xl duration-300 hover:bg-light_green hover:text-main">
                دسته بندی
                <FontAwesomeIcon icon={faAngleDown} className="translate-y-1 -translate-x-1 duration-200 group-hover:rotate-180" />
                <div className="submenuBg absolute w-full invisible group-hover:visible h-5">
                    <ul className="absolute bg-lightWhite border  border-t-4 border-transparent rounded-2xl border-t-main p-3 w-[200px] -right-3 top-28 opacity-0 -z-10 duration-300 group-hover:z-0 group-hover:opacity-100 group-hover:visible group-hover:top-5 dark:bg-darkThirdBlack">
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            برنامه نویسی
                        </li>
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            هوش مصنوعی
                        </li>
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            برنامه نویسی
                        </li>
                    </ul>
                </div>
            </li>
            <li className="group relative cursor-pointer p-3 rounded-xl duration-300 hover:bg-light_green hover:text-main">
                مدرسان
                <FontAwesomeIcon icon={faAngleDown} className="translate-y-1 -translate-x-1 duration-200 group-hover:rotate-180" />
                <div className="submenuBg absolute w-full invisible group-hover:visible h-5">
                    <ul className="absolute bg-lightWhite border  border-t-4 border-transparent rounded-2xl border-t-main p-3 w-[200px] -right-3 top-28 opacity-0 -z-10 duration-300 group-hover:z-0 group-hover:opacity-100 group-hover:visible group-hover:top-5 dark:bg-darkThirdBlack">
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            برنامه نویسی
                        </li>
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            هوش مصنوعی
                        </li>
                        <li className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                            برنامه نویسی
                        </li>
                    </ul>
                </div>
            </li>

        </ul>
    );
};
export default Navbar;
