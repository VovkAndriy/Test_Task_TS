import { NavLink } from 'react-router-dom'
import appleleIcon from '../../assets/icons/apple.svg'
import googleIcon from '../../assets/icons/google.svg'
import { CheckboxForm } from '../Checkbox/CheckboxForm'
import { Input } from '../Input/Input'
import { LoginCard } from '../LoginCard/LoginCard'

export const RegisterForm = () => {
    return (
        <div className="w-full flex justify-center items-center gap-2">
            <form className="text-text-gray">
                <div className="flex flex-col gap-9 m:pb-5">
                    <div>
                        <h1 className="text-primary-black text-2xl font-semibold text-center pb-4 m:pb-1 m:pt-3">
                            Account Details
                        </h1>
                        <p className="text-sm font-medium text-center">Add your personal info</p>
                    </div>
                    <div className="flex gap-5 s:flex-col s:px-4">
                        <LoginCard img={googleIcon} text="Google" />
                        <LoginCard img={appleleIcon} text="Apple" />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className="w-36 h-px bg-gray-line" />
                        <p>Or with email</p>
                        <div className="w-36 h-px bg-gray-line" />
                    </div>
                    <div className="flex gap-5 flex-col m:px-4">
                        <div className="flex gap-5 s:flex-col">
                            <Input placeholder="First Name" type="text" />
                            <Input placeholder="Last Name" type="text" />
                        </div>
                        <Input placeholder="Creator Name" type="text" />
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Phone Number" type="text" />
                        <Input placeholder="Password" type="password" />
                        <Input placeholder="Confirm Password" type="password" />
                        <div className="flex gap-2 items-center text-forthy-gray font-semibold">
                            <CheckboxForm isSelected={false} />
                            <p>
                                I Accept the
                                <span className="text-border-blue cursor-pointer"> Terms</span>
                            </p>
                        </div>
                        <NavLink
                            className="py-3 px-4 bg-primary-blue hover:bg-border-blue rounded-md text-primary-color font-semibold text-sm text-center"
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
