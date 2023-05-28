import { Link } from "react-router-dom"
import FooterUlIcon from "../FooterUlIcon/FooterUlIcon"

const FooterUl = ({ title, submenu, twoColumn, lasindex }: T_NavbarItem) => {
    return (
        <div className={`${lasindex ? "col-start-1 col-end-3 md:col-span-1" : ""}`}>
            <p className=' flex select-none items-center gap-2 font-yekaBakhBold text-darkThirdBlack dark:text-lightSecondaryWhite lg:text-lg'>
                <FooterUlIcon />
                {title}
            </p>
            <ul className={`mt-3 ${twoColumn ? "columns-2" : ""}`}>
                {submenu
                    ? submenu.map(menu => (
                          <Link
                              key={menu.id}
                              to={menu.link}>
                              <li className='flex cursor-pointer items-center gap-2 text-xs text-darksixthGray before:block before:h-2 before:w-2 before:-translate-y-[1px] before:rounded-full before:border-[0.7px] before:border-FourthGray before:transition-all before:duration-300 hover:text-main hover:before:h-3 hover:before:w-3 hover:before:border-none hover:before:bg-main  dark:text-FourthGray dark:hover:text-secnodryMain dark:hover:before:bg-secnodryMain md:text-sm lg:text-base xl:text-lg '>
                                  {menu.title}
                              </li>
                          </Link>
                      ))
                    : null}
            </ul>
        </div>
    )
}
export default FooterUl
