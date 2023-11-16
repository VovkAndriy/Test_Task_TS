import business from '../../assets/icons/Navbar/business.svg'
import checkList from '../../assets/icons/Navbar/checkList.svg'
import filesFolder from '../../assets/icons/Navbar/files-folders.svg'
import general from '../../assets/icons/Navbar/general.svg'
import homeImg from '../../assets/icons/Navbar/home.svg'
import setting from '../../assets/icons/Navbar/setting.svg'
import { default as support, default as whitelist } from '../../assets/icons/Navbar/whitelist.svg'

import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
    return (
        <div className="p-[30px] w-[23%] h-full border-r-[1px] border-solid border-border-color">
            <NavbarItem img={homeImg} description="Home" />
            <NavbarItem img={filesFolder} description="Submit Violations" />
            <NavbarItem img={whitelist} description="Whitelist" />
            <NavbarItem img={checkList} description="Billing" />
            <NavbarItem img={business} description="Affilliate Program" />
            <NavbarItem img={setting} description="Settings" />
            <NavbarItem img={support} description="FAQ" />
            <NavbarItem img={general} description="Support" />
        </div>
    )
}
