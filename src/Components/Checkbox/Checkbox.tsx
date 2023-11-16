import { useEffect, useState } from 'react'
import checkImg from '../../assets/icons/check.svg'

interface IProps {
    isSelected: boolean
    isAllSelected: boolean
    selectAll?: () => void
}

export const Checkbox: React.FC<IProps> = ({ isSelected, isAllSelected, selectAll }) => {
    const [isItemSelected, setIsItemSelected] = useState(isSelected)

    const checkItem = () => {
        setIsItemSelected(!isItemSelected)
    }
    useEffect(() => {
        setIsItemSelected(isAllSelected)
    }, [isAllSelected])
    return (
        <div onClick={selectAll}>
            <div
                className="w-[30px] h-[30px] cursor-pointer bg-secondary-color rounded-lg"
                onClick={checkItem}
            >
                {isItemSelected ? <img src={checkImg} alt="checked" /> : <></>}
            </div>
        </div>
    )
}
