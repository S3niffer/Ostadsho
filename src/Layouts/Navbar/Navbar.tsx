import { getAllCategories } from "../../App/Slices/Courses";
import { store } from "../../App/Store";
import NavbarItem from "../../components/NavbarItem/NavbarItem";

export const NavbarItems: T_NavbarItem[] = [
    {
        id: 0, title: 'دسترسی سریع', submenu: [
            { id: 0, link: '/', title: 'صفحه اصلی', },
            { id: 1, link: '/Categories/All', title: 'صفحه فروشگاه' },
            { id: 2, link: '/basket', title: 'صفحه سبد خرید' }
        ]
    },
    { id: 1, title: 'دسته بندی', twoColumn: true, submenu: getAllCategories(store.getState()) },
    {
        id: 2, title: 'مدرسان', submenu: [
            { id: 0, link: '/Instructors/mehrani', title: 'محمحد معین مهرانی' },
            { id: 1, link: '/Instructors/madaeni', title: 'ایمان مدائنی' },
            { id: 2, link: '/Instructors/mirmirani', title: 'جادی میرمیرانی' }
        ]
    },


]


const Navbar = () => {
    return (
        <ul className="flex gap-5 font text-base text-Gray dark:text-lightWhite items-center pt-2">
            {
                NavbarItems.map(item => (
                    <NavbarItem key={item.id} {...item} />
                ))
            }
        </ul>
    );
};
export default Navbar;
