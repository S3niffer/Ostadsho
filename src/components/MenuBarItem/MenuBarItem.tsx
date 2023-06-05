import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

const MenuBarItem = (item: T_NavbarItem) => {
    return (
        <div
            className={`overflow-hidden pb-4 text-ThirdGray  dark:text-lightWhite ${
                item.lasindex ? "mt-5" : "my-5 border border-transparent border-b-gray-200"
            }`}
        >
            <input
                type='checkbox'
                className='absolute z-10 h-7 w-[250px] translate-y-2 cursor-pointer opacity-0'
                id={item.title}
                onBlur={e => (e.target.checked = false)}
            />
            <div className='icon-container flex items-center justify-between text-base font-semibold '>
                <label htmlFor={item.title}>
                    <div className='cursor-pointer'>{item.title}</div>
                </label>
                <label htmlFor={item.title}>
                    <div className='cursor-pointer pt-1 '>
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className='flex rotate-180 items-center rounded-full  bg-black/10 p-1 text-sm text-ThirdGray/75 transition-all duration-300 dark:text-lightWhite'
                        />
                    </div>
                </label>
            </div>
            {item.submenu ? (
                <div className='ul-container max-h-0 transition-all duration-1000'>
                    <ul className=' flex flex-col gap-1 pt-4'>
                        {item.submenu.map(subItem => (
                            <NavLink
                                className={props => (props.isActive ? "linkIsActive" : "")}
                                key={subItem.id}
                                to={subItem.link}
                            >
                                <li className='cursor-pointer rounded-lg bg-lightSecondaryWhite py-2 pr-4 text-sm hover:bg-light_green hover:text-main dark:bg-darkThirdBlack dark:hover:bg-light_green'>
                                    {subItem.title}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}
export default MenuBarItem
