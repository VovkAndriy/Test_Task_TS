import React, { useState } from 'react'
import arrow from '../../assets/icons/Header/arrows.svg'
import { navList } from './Navbar'
import { NavbarItem } from './NavbarItem'

export const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="">
            {/* Burger Menu Button */}
            <button className="text-white" onClick={toggleMenu}>
                <img className="cursor-pointer" src={arrow} alt="arrow" />
            </button>

            {/* Burger Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black text-primary-color bg-opacity-95 z-50 px-5">
                    <div className="flex justify-end p-4">
                        <button className="text-white" onClick={toggleMenu}>
                            <img className="cursor-pointer" src={arrow} alt="arrow" />
                        </button>
                    </div>

                    <div className="flex flex-col items-start py-12">
                        {navList.map((item, index) => (
                            <div key={index}>
                                <NavbarItem img={item.img} description={item.description} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
