import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import educadion from '../../assets/icons/CreateAccount/education.svg'
import userIcon from '../../assets/icons/CreateAccount/user.svg'
import butIcon from '../../assets/icons/buttonArrow.svg'
import { AccountTypeCard } from '../AccountTypeCard/AccountTypeCard'

export const ChooseAccountType = () => {
    const [selectedCard, setSelectedCard] = useState<string>('')

    const handleCardSelect = (cardTitle: string) => {
        setSelectedCard(cardTitle)
    }

    return (
        <div className="w-full m:h-full flex justify-center items-center m:pb-5">
            <div className="flex flex-col gap-9 m:justify-around">
                <div className="m:text-center s:pt-5">
                    <h1 className="text-primary-black text-2xl font-semibold">
                        Choose an account type
                    </h1>
                    <p className="text-text-gray text-sm font-medium">
                        If you need more info, please visit our{' '}
                        <span className="text-primary-blue cursor-pointer">help page.</span>
                    </p>
                </div>
                <div className="flex gap-6 s:flex-wrap s:justify-center">
                    <AccountTypeCard
                        img={userIcon}
                        title="Creator"
                        description="Sign-up as a creator"
                        handleCardSelect={handleCardSelect}
                        isSelected={selectedCard === 'Creator'}
                    />
                    <AccountTypeCard
                        img={educadion}
                        title="Agency"
                        description="Sign-up as an agency"
                        handleCardSelect={handleCardSelect}
                        isSelected={selectedCard === 'Agency'}
                    />
                </div>
                <div className="w-full flex justify-end m:justify-center">
                    <NavLink
                        to="/account-details"
                        type="submit"
                        className="rounded-md bg-secondary-blue flex items-center gap-[6px] py-[12px] px-[18px] text-[16px] font-semibold text-white shadow-sm hover:bg-primary-blue focus-visible:outline "
                    >
                        Continue
                        <img src={butIcon} alt="arrow" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
