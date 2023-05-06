import NavbarItem, { TnavbarItem } from "../../components/NavbarItem/NavbarItem";

const NavbarItems: TnavbarItem[] = [
    {
        id: 0, title: 'برنامه نویسی', link: '', submenu: [
            { id: 0, link: '', title: 'هوش مصنوعی' },
            { id: 1, link: '', title: 'طراحی سایت' },
            { id: 2, link: '', title: 'برنامه نویسی موبایل' }
        ]
    },
    {
        id: 1, title: 'روزنامه نویسی', link: '', submenu: [
            { id: 0, link: '', title: 'هوش مصنوعی' },
            { id: 1, link: '', title: 'طراحی سایت' },
            { id: 2, link: '', title: 'برنامه نویسی موبایل' }
        ]
    },

]


const Navbar = () => {
    return (
        <ul className="flex gap-5 font text-base text-Gray dark:text-lightWhite items-center pt-2">
            {NavbarItems.map(item => (
                <NavbarItem key={item.id} {...item} />
            ))}
        </ul>
    );
};
export default Navbar;
