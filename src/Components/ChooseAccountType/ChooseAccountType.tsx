import { AccountTypeCard } from '../AccountTypeCard/AccountTypeCard'

import { NavLink } from 'react-router-dom'
import educadion from '../../assets/icons/CreateAccount/education.svg'
import userIcon from '../../assets/icons/CreateAccount/user.svg'
import butIcon from '../../assets/icons/buttonArrow.svg'

export const ChooseAccountType = () => {
    return (
        <div className=" w-full flex justify-center items-center">
            <div className="flex  flex-col gap-[35px]">
                <div className="">
                    <h1 className="text-primary-black text-[24px] font-semibold">
                        Choose an account type
                    </h1>
                    <p className="text-text-gray text-[14px] font-medium">
                        If you need more info, please visit our help page.
                    </p>
                </div>
                <div className="flex gap-[22px]">
                    <AccountTypeCard
                        img={userIcon}
                        title="Creator"
                        description="Sign-up as a creator"
                    />
                    <AccountTypeCard
                        img={educadion}
                        title="Agency"
                        description="Sign-up as a agency"
                    />
                </div>
                <div className="w-full flex justify-end">
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
