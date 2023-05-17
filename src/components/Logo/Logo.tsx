import lightModeLOGO from '../../Assets/logo/logo-light-horizontal.png'
import darkModeLOGO from '../../Assets/logo/sshowlogo-dark-horizontal.png'

const Logo = () => {
    return (
        <div className="logo w-[140px] h-[52px]">
            <img src={lightModeLOGO} alt="logo" className="w-full h-full duration-500 cursor-pointer hover:scale-110" />
        </div>
    )
}
export default Logo