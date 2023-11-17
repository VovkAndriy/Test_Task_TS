import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/icons/CreateAccount/Logo.svg'
import { Pagination } from '../Pagination/Pagination'

export const CreateAccountProgress = () => {
    const location = useLocation()
    const path = location.pathname

    const getCurrentProgressId = () => {
        switch (path) {
            case '/':
                return 1
            case '/account-details':
                return 2
            default:
                return 3
        }
    }

    const [currentProgress, setCurrentProgress] = useState<number>(getCurrentProgressId())
    useEffect(() => {
        setCurrentProgress(getCurrentProgressId())
    }, [path])
    return (
        <div
            className={`w-2/6 l:w-5/12 m:w-full bg-secondary-blue justify-between bg-cover flex flex-col  bg-hero items-center px-4 pt-36 m:pt-10 pb-9 m:pb-5`}
        >
            <div className="">
                <div className="pb-32 m:pb-10">
                    <img src={logo} alt="logo" />
                </div>
                <Pagination chooseId={currentProgress} />
            </div>
            <div className="flex justify-between items-center gap-4 text-primary-green text-4">
                <p>Terms</p>
                <p>Plans</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}
