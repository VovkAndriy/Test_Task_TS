import { useEffect, useState } from 'react'
import { PagingationItem } from './PagingationItem'

interface IPaginationItem {
    id: number
    title: string
    description: string
    isActive: boolean
}

const paginationItem: IPaginationItem[] = [
    {
        id: 1,
        title: 'Account Type',
        description: 'Select your account type',
        isActive: true,
    },
    {
        id: 2,
        title: 'Account Details',
        description: 'Add your personal info',
        isActive: false,
    },
    {
        id: 3,
        title: 'Creator Info',
        description: 'Setup your business details',
        isActive: false,
    },
    {
        id: 4,
        title: 'Completed',
        description: 'Your account is created',
        isActive: false,
    },
]

interface IProp {
    chooseId: number
}

export const Pagination: React.FC<IProp> = ({ chooseId }) => {
    const [itemList, setItemList] = useState<IPaginationItem[]>(paginationItem)
    useEffect(() => {
        setItemList(
            paginationItem.map(item => ({
                ...item,
                isActive: item.id === chooseId,
            }))
        )
    }, [chooseId])

    return (
        <div>
            {itemList.map(item => {
                return (
                    <div key={item.id} className="flex">
                        <PagingationItem
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            isActive={item.isActive}
                        />
                    </div>
                )
            })}
        </div>
    )
}
