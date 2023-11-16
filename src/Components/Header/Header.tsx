import arrow from '../../assets/icons/Header/arrows.svg'
import loop from '../../assets/icons/Header/loop.svg'
import notiflication from '../../assets/icons/Header/notification.svg'
import user from '../../assets/icons/Header/user.svg'
import logo from '../../assets/icons/logo.svg'

export const Header = () => {
    return (
        <div className="px-[30px] py-[20px] border-b-[1px] flex justify-between border-solid border-border-color">
            <img src={logo} alt="logo" />
            <div className="flex gap-[10px]">
                <div className="p-[10px] relative">
                    <div className="absolute w-[18px] h-[18px] flex items-center justify-center text-primary-color font-semibold bg-primary-red px-[5px] rounded-full bottom-5 left-5">
                        5
                    </div>
                    <img src={notiflication} alt="notiflication" />
                </div>
                <div className="p-[10px]">
                    <img src={loop} alt="loop" />
                </div>
                <img src={user} alt="user" />
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
