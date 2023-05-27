import { useSelector } from "react-redux"
import NavbarItem from "../../components/NavbarItem/NavbarItem"
import { getNavbarItems } from "../../App/Slices/Navbar"

const Navbar = () => {
    const NavbarItems = useSelector(getNavbarItems)
    return (
        <ul className="flex gap-5 font text-base text-Gray dark:text-lightWhite items-center pt-2">
            {NavbarItems.map((item) => (
                <NavbarItem key={item.id} {...item} />
            ))}
        </ul>
    )
}
export default Navbar
