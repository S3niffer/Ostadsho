import { IconDefinition, faMapLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../components/Logo/Logo"
import eNamadLogo from '../../Assets/eNamadLogos/enamad_logo.webp'
import samandehi from '../../Assets/eNamadLogos/samandehi.png'
import FooterUl from "../../components/FooterUl/FooterUl"
import { NavbarItems } from "../Navbar/Navbar"

type contactInfo = {
    id: number,
    icon: IconDefinition,
    info: string
}
const contactInfos: contactInfo[] = [
    { id: 0, icon: faMapLocationDot, info: "تهران - خیابان پاسداران - فرعی ۶۵" },
    { id: 1, icon: faPhoneFlip, info: "۰۲۱-۰۰۰۰۰۰۰۰ | ۰۲۱-۰۰۰۰۰۰۰" },
    { id: 2, icon: faMapLocationDot, info: "Info@pishtaz-web.com" },
]


const Footer = ({ children: TopFooter, dynamicDepart }: { children: React.ReactNode, dynamicDepart?: 'E_NAMAD' }) => {

    return (
        <div className="Footer dark:bg-darkFourthBlack">
            {
                TopFooter
            }
            <div className="container pt-4 dark:pt-0 pb-4 px-3 md:px-0">
                <Logo />
                <p className="mt-3 text-xs md:text-sm bml:text-base lg:text-lg text-justify">
                    پوسته و قالب استاد شو اولین و بروزترین پوسته آموزشی ایران که در سال 1401 توسط تیم پیشتاز وب کد نویسی به بازار گرم وردپرس ایران عرضه شد، شما میتوانید این پوسته را در سایت <a href="https://www.rtl-theme.com/ostadsho-wordpress-theme/" target="_blank" onMouseOver={(e) => { e.currentTarget.textContent = '(برو به صفحه محصول)' }} onMouseLeave={(e) => { e.currentTarget.textContent = 'راست چین' }} className="text-main font-danafaBold hover:text-main dark:hover:text-secnodryMain hover:underline-offset-4 hover:underline">راست چین</a> خریداری و استفاده نمایید.
                </p>
                <hr className="my-4" />
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1.8fr] flex-[1] font-yekaBakh">
                        {
                            NavbarItems.sort((a, b) => {
                                if (a.submenu && b.submenu) {
                                    return a.submenu?.length - b.submenu?.length
                                }
                                return 0
                            }).map(NavbarItem => (
                                <FooterUl key={NavbarItem.id} {...NavbarItem} />
                            ))
                        }
                    </div>
                    <div className="flex-[0.5]">
                        {
                            dynamicDepart === 'E_NAMAD'
                                ? (
                                    <div className="flex justify-around">
                                        <img src={eNamadLogo} alt="logo" />
                                        <img src={samandehi} alt="logo" />
                                    </div>
                                )
                                : (
                                    <div className="flex flex-col gap-3 md:pt-3">
                                        {
                                            contactInfos.map(({ id, info, icon }) => (
                                                <div className="flex gap-2 items-center" key={id}>
                                                    <div className="btn p-0 btn-green  flex place-content-center py-1 px-2">
                                                        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                                                    </div>
                                                    <p className="text-xs md:text-sm lg:text-base">
                                                        {info}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="mt-6 bg-lightThirdWhite dark:bg-darkBlack dark:text-FourthGray border border-transparent border-lightSecondaryWhite rounded-md p-3 md:text-center">
                    <span className="text-xs md:text-sm bml:text-base lg:text-lg select-none text-justify">
                        تمامی حقوق مادر و معنوی این سایت برای
                        <span className="text-main cursor-pointer transition-colors duration-200 hover:text-secnodryMain" onClick={() => { (document.querySelector('.App') as HTMLDivElement).scrollTo({ top: 0, behavior: 'smooth' }) }}>
                            {" استادشو "}
                        </span>
                        محفوظ میباشد.
                        (
                        بنده یعنی توسعه دهنده این کار فقط در جهت نمونه کار از این محصول استفاده کردم!
                        )
                    </span>
                </div>
            </div>
        </div >
    )
}
export default Footer