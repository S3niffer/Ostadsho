import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const NavbarItem = (item: T_NavbarItem) => {
    return (
        <li className='group relative cursor-pointer rounded-xl p-3 duration-300 hover:bg-light_green hover:text-main xl:text-lg'>
            {item.title}
            {item.submenu ? (
                <>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className='-translate-x-1 translate-y-1 duration-200 group-hover:rotate-180'
                    />
                    <div className='submenuBg invisible absolute h-5 w-full group-hover:visible'>
                        <ul className='absolute -right-3 top-20 -z-[1]  w-[200px] rounded-2xl border border-t-4 border-transparent border-t-main bg-lightWhite p-3 opacity-0 shadow-xl duration-300 group-hover:visible group-hover:top-5 group-hover:z-10 group-hover:opacity-100 dark:bg-darkThirdBlack'>
                            {item.submenu.map(item => (
                                <Link
                                    key={item.id}
                                    to={item.link}>
                                    <li className='rounded-lg p-2 text-Gray hover:bg-light_green hover:text-main dark:text-lightWhite'>
                                        {item.title}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </>
            ) : null}
        </li>
    )
}
export default NavbarItem
