import loop from '../../assets/icons/Header/loop.svg'
import notiflication from '../../assets/icons/Header/notification.svg'
import user from '../../assets/icons/Header/user.svg'
import logo from '../../assets/icons/logo.svg'
import { BurgerMenu } from '../Navbar/BurgerMenu'

export const Header = () => {
    return (
        <div className="px-6 py-5 border-b flex justify-between border-solid border-border-color">
            <img className="cursor-pointer" src={logo} alt="logo" />
            <div className="flex gap-2.5">
                <div className="p-2.5 relative cursor-pointer">
                    <div className="absolute w-[18px] h-[18px] flex items-center justify-center text-primary-color font-semibold bg-primary-red px-1 rounded-full bottom-5 left-5">
                        5
                    </div>
                    <img src={notiflication} alt="notiflication" />
                </div>
                <div className="p-2.5 cursor-pointer">
                    <img src={loop} alt="loop" />
                </div>
                <img className="cursor-pointer" src={user} alt="user" />
                <BurgerMenu />
            </div>
        </div>
    )
}
