import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const NavbarItem = (item: TnavbarItem) => {
    return (
        <li className="group relative cursor-pointer p-3 rounded-xl duration-300 xl:text-lg hover:bg-light_green hover:text-main">
            {item.title}
            {item.submenu
                ? (
                    <>
                        <FontAwesomeIcon icon={faAngleDown} className="translate-y-1 -translate-x-1 duration-200 group-hover:rotate-180" />
                        <div className="submenuBg absolute w-full invisible group-hover:visible h-5">
                            <ul className="shadow-xl absolute bg-lightWhite border  border-t-4 border-transparent rounded-2xl border-t-main p-3 w-[200px] -right-3 top-20 opacity-0 -z-[1] duration-300 group-hover:z-10 group-hover:opacity-100 group-hover:visible group-hover:top-5 dark:bg-darkThirdBlack">
                                {item.submenu.map(item => (
                                    <li key={item.title} className="p-2 hover:bg-light_green rounded-lg text-Gray hover:text-main dark:text-lightWhite">
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )
                : null
            }
        </li>
    )
}
export default NavbarItem