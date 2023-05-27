import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"



const MenuBarItem = (item: T_NavbarItem) => {
    return (
        <div className={`pb-4 overflow-hidden text-ThirdGray  dark:text-lightWhite ${item.lasindex ? 'mt-5' : 'my-5 border border-transparent border-b-gray-200'}`}>
            <input
                type="checkbox"
                className="absolute z-10 w-[250px] opacity-0 cursor-pointer h-7 translate-y-2"
                id={item.title}
                onBlur={(e) => e.target.checked = false}
            />
            <div className="icon-container flex justify-between items-center text-base font-semibold ">
                <label htmlFor={item.title}>
                    <div className="cursor-pointer">{item.title}</div>
                </label>
                <label htmlFor={item.title}>
                    <div className="pt-1 cursor-pointer ">
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className="bg-black/10 rotate-180 transition-all duration-300  text-ThirdGray/75 dark:text-lightWhite rounded-full p-1 text-sm flex items-center"
                        />
                    </div>
                </label>
            </div>
            {
                item.submenu ? (
                    <div className="ul-container max-h-0 transition-all duration-1000">
                        <ul className=" flex flex-col gap-1 pt-4">
                            {
                                item.submenu.map(subItem => (
                                    // @ts-expect-error
                                    <Link key={subItem.id} to={subItem.link ? subItem.link : `/Categories/${subItem.categoryName}`}>
                                        <li className="cursor-pointer bg-lightSecondaryWhite dark:bg-darkThirdBlack dark:hover:bg-light_green hover:bg-light_green hover:text-main text-sm pr-4 rounded-lg py-2">{subItem.title}</li>
                                    </Link >

                                ))
                            }
                        </ul>
                    </div>
                ) : null
            }
        </div>
    )
}
export default MenuBarItem