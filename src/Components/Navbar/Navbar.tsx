import business from '../../assets/icons/Navbar/business.svg'
import checkList from '../../assets/icons/Navbar/checkList.svg'
import filesFolder from '../../assets/icons/Navbar/files-folders.svg'
import general from '../../assets/icons/Navbar/general.svg'
import homeImg from '../../assets/icons/Navbar/home.svg'
import setting from '../../assets/icons/Navbar/setting.svg'
import { default as support, default as whitelist } from '../../assets/icons/Navbar/whitelist.svg'

import { NavbarItem } from './NavbarItem'

export interface navListItem {
    img: string
    description: string
}

export const navList = [
    {
        img: homeImg,
        description: 'Home',
    },
    {
        img: filesFolder,
        description: 'Submit Violations',
    },
    {
        img: whitelist,
        description: 'Whitelist',
    },
    {
        img: checkList,
        description: 'Billing',
    },
    {
        img: business,
        description: 'Affilliate Program',
    },
    {
        img: setting,
        description: 'Settings',
    },
    {
        img: support,
        description: 'FAQ',
    },
    {
        img: general,
        description: 'Support',
    },
]

export const Navbar = () => {
    return (
        <div className="p-8 w-1/4 h-full border-r border-solid border-border-color min-w-[230px] xl:hidden">
            {navList.map((item, index) => (
                <div key={index}>
                    <NavbarItem img={item.img} description={item.description} />
                </div>
            ))}
        </div>
    )
}
