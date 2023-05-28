import { useSelector } from "react-redux"
import NavbarItem from "../../components/NavbarItem/NavbarItem"
import { getNavbarItems } from "../../App/Slices/Navbar"

const Navbar = () => {
    const NavbarItems = useSelector(getNavbarItems)
    return (
        <ul className='font flex items-center gap-5 pt-2 text-base text-Gray dark:text-lightWhite'>
            {NavbarItems.map(item => (
                <NavbarItem
                    key={item.id}
                    {...item}
                />
            ))}
        </ul>
    )
}
export default Navbar
