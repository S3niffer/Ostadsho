import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../components/Logo/Logo"
import eNamadLogo from "../../Assets/eNamadLogos/enamad_logo.webp"
import samandehi from "../../Assets/eNamadLogos/samandehi.png"
import FooterUl from "../../components/FooterUl/FooterUl"
import ThemeChangerBtn from "../../components/ThemeChangerBtn/ThemeChangerBtn"
import { useSelector } from "react-redux"
import { getNavbarItems } from "../../App/Slices/Navbar"
import { getContactInfos } from "../../App/Slices/ContactInfo"

const Footer = ({ children: TopFooter, dynamicDepart }: T_Footer) => {
    const NavbarItems = useSelector(getNavbarItems)
    const ContactInfos = useSelector(getContactInfos)
    return (
        <div className='Footer dark:bg-darkFourthBlack'>
            {TopFooter}
            <div className='container px-3 pb-4 pt-4 md:px-0'>
                <div className='flex items-center justify-between'>
                    <Logo />
                    <ThemeChangerBtn />
                </div>
                <p className='mt-3 text-justify text-xs md:text-sm bml:text-base lg:text-lg'>
                    پوسته و قالب استاد شو اولین و بروزترین پوسته آموزشی ایران که در سال 1401 توسط تیم پیشتاز وب کد نویسی
                    به بازار گرم وردپرس ایران عرضه شد، شما میتوانید این پوسته را در سایت{" "}
                    <a
                        href='https://www.rtl-theme.com/ostadsho-wordpress-theme/'
                        target='_blank'
                        onMouseOver={e => {
                            e.currentTarget.textContent = "(برو به صفحه محصول)"
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.textContent = "راست چین"
                        }}
                        className='shopPageButton inline-block px-1 font-danafaBold text-main hover:text-main hover:underline hover:underline-offset-4 dark:hover:text-secnodryMain md:text-lg'>
                        راست چین
                    </a>{" "}
                    خریداری و استفاده نمایید.
                </p>
                <hr className='my-4' />
                <div className='flex flex-col gap-8 md:flex-row md:items-center'>
                    <div className='grid flex-[1] grid-cols-[1fr,1fr] font-yekaBakh md:grid-cols-[1fr,1fr,1.8fr]'>
                        {NavbarItems.slice()
                            .sort((a, b) => a.submenu?.length! - b.submenu?.length!)
                            .map((NavbarItem, index) => {
                                return (
                                    <FooterUl
                                        key={NavbarItem.id}
                                        {...NavbarItem}
                                        lasindex={NavbarItems.length === ++index ? true : undefined}
                                    />
                                )
                            })}
                    </div>
                    <div className='flex-[0.5]'>
                        {dynamicDepart === "E_NAMAD" ? (
                            <div className='flex justify-around'>
                                <img
                                    src={eNamadLogo}
                                    alt='logo'
                                />
                                <img
                                    src={samandehi}
                                    alt='logo'
                                />
                            </div>
                        ) : (
                            <div className='flex flex-col gap-3 md:pt-3'>
                                {ContactInfos.map(({ id, info, icon }) => (
                                    <div
                                        className='flex items-center gap-2'
                                        key={id}>
                                        <div className='btn btn-green flex  place-content-center p-0 px-2 py-1'>
                                            <FontAwesomeIcon
                                                icon={icon}
                                                className='h-5 w-5'
                                            />
                                        </div>
                                        <p className='text-xs md:text-sm lg:text-base'>{info}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-6 rounded-md border border-lightSecondaryWhite border-transparent bg-lightThirdWhite p-3 dark:bg-darkBlack dark:text-FourthGray md:text-center'>
                    <span className='select-none text-justify text-xs md:text-sm bml:text-base lg:text-lg'>
                        تمامی حقوق مادر و معنوی این سایت برای
                        <span
                            className='cursor-pointer text-main transition-colors duration-200 hover:text-secnodryMain'
                            onClick={() => {
                                ;(document.querySelector(".App") as HTMLDivElement).scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }}>
                            {" استادشو "}
                        </span>
                        محفوظ میباشد. ( بنده یعنی توسعه دهنده این کار فقط در جهت نمونه کار از این محصول استفاده کردم! )
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Footer
