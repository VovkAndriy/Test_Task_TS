import { useState } from 'react'
import checkImg from '../../assets/icons/check.svg'

interface IProps {
    isSelected: boolean
}

export const CheckboxForm: React.FC<IProps> = ({ isSelected }) => {
    const [isItemSelected, setIsItemSelected] = useState(isSelected)

    const checkItem = () => {
        setIsItemSelected(!isItemSelected)
    }

    return (
        <div>
            <div
                className="w-[30px] h-[30px] cursor-pointer bg-secondary-color rounded-lg"
                onClick={checkItem}
            >
                {isItemSelected ? <img src={checkImg} alt="checked" /> : <></>}
            </div>
        </div>
    )
}
