import { NavLink } from 'react-router-dom'
import appleleIcon from '../../assets/icons/apple.svg'
import googleIcon from '../../assets/icons/google.svg'
import { CheckboxForm } from '../Checkbox/CheckboxForm'
import { Input } from '../Input/Input'
import { LoginCard } from '../LoginCard/LoginCard'

export const RegisterForm = () => {
    return (
        <div className="w-[100%] flex justify-center items-center">
            <form className="text-text-gray">
                <div className="flex flex-col gap-[35px]">
                    <div>
                        <h1 className="text-primary-black text-[24px] font-semibold text-center pb-[15px]">
                            Account Details
                        </h1>
                        <p className="text-[14px] font-medium text-center">
                            Add your personal info
                        </p>
                    </div>
                    <div className="flex gap-[10px]">
                        <LoginCard img={googleIcon} text="Google" />
                        <LoginCard img={appleleIcon} text="Apple" />
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[147px] h-[1px] bg-gray-line" />
                        <p>Or with email</p>
                        <div className="w-[147px] h-[1px] bg-gray-line" />
                    </div>
                    <div className="flex gap-[20px] flex-col">
                        <div className="flex gap-[20px]">
                            <Input placeholder="First Name" />
                            <Input placeholder="Last Name" />
                        </div>
                        <Input placeholder="Creator Name" />
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Password" type="password" />
                        <Input placeholder="Confirm Password" type="password" />
                        <div className="flex gap-[7px] items-center text-forthy-gray font-semibold">
                            <CheckboxForm isSelected={false} />
                            <p>
                                I Accept the
                                <span className="text-border-blue cursor-pointer"> Terms</span>
                            </p>
                        </div>

                        <NavLink
                            className="py-[12px] px-[16px] bg-primary-blue hover:bg-border-blue rounded-md text-primary-color font-semibold text-[13px] text-center"
                            to="/home"
                        >
                            Continue
                        </NavLink>
                        <p className="text-center">
                            Already have an Account?
                            <span className="text-border-blue cursor-pointer"> Sign in</span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
