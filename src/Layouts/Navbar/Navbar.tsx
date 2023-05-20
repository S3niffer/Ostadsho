import NavbarItem from "../../components/NavbarItem/NavbarItem";

export const NavbarItems: TnavbarItem[] = [
    {
        id: 0, title: 'دسترسی سریع', link: '', submenu: [
            { id: 0, link: '', title: 'صفحه اصلی', },
            { id: 1, link: '', title: 'صفحه فروشگاه' },
            { id: 2, link: '', title: 'صفحه سبد خرید' }
        ]
    },
    {
        id: 1, title: 'دسته بندی', link: '', ulColsThree: true, submenu: [
            { id: 0, link: '', title: 'فرانت اند', },
            { id: 1, link: '', title: 'بک اند' },
            { id: 2, link: '', title: 'هوشی مصنوعی' },
            { id: 3, link: '', title: 'موبایل' },
            { id: 4, link: '', title: 'شبکه و امنیت' },
            { id: 5, link: '', title: 'نرم افزار' },
        ]
    },
    {
        id: 2, title: 'مدرسان', link: '', submenu: [
            { id: 0, link: '', title: 'محمحد معین مهرانی' },
            { id: 1, link: '', title: 'ایمان مدائنی' },
            { id: 2, link: '', title: 'جادی میرمیرانی' }
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
