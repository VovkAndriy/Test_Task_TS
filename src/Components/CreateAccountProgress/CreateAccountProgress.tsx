import logo from '../../assets/icons/CreateAccount/Logo.svg'
import { Pagination } from '../Pagination/Pagination'

export const CreateAccountProgress = () => {
    return (
        <div
            className={`w-[30%] bg-secondary-blue justify-between bg-cover flex flex-col  bg-hero px-[125px] pt-[140px] pb-[35px]`}
        >
            <div className="">
                <div className="pb-[120px]">
                    <img src={logo} alt="logo" />
                </div>
                <Pagination chooseId={2} />
            </div>
            <div className="flex gap-[39px] text-primary-green text-[13px]">
                <p>Terms</p>
                <p>Plans</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}
