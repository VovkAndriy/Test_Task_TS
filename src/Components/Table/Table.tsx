import { useEffect, useState } from 'react'
import { Item } from '../../mocks/ItemTableList'
import { Checkbox } from '../Checkbox/Checkbox'
import { sliceOfPage } from '../Utils/sliceOfPage'

interface IProps {
    status: string
    dayTime: string
    currentItemPerPage: Item[]
    currentPage: number
    setTotalPages: React.Dispatch<React.SetStateAction<number>>
    setFilteredItems: React.Dispatch<React.SetStateAction<Item[]>>
    searchedId?: number
}

export const Table: React.FC<IProps> = ({
    status,
    dayTime,
    currentItemPerPage,
    currentPage,
    setTotalPages,
    setFilteredItems,
    searchedId,
}) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false)
    const [tabelItemsArr, setTableItemsArr] = useState(currentItemPerPage)

    const selectAll = () => {
        setIsAllSelected(prev => !prev)
    }

    const itemsPerPage = 5
    useEffect(() => {
        const filterItemsByStatus = () => {
            switch (status) {
                case 'Removed':
                    return currentItemPerPage.filter(item => item.action === true)
                case 'Delisted':
                    return currentItemPerPage.filter(item => item.action === false)
                default:
                    return currentItemPerPage
            }
        }

        const filterItemsById = () => {
            return filteredItems.filter(item => String(item.id).includes(String(searchedId)))
        }

        const filteredItems = filterItemsByStatus()
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
        if (searchedId) {
            setTableItemsArr(filterItemsById())
            setTotalPages(1)
        } else {
            setFilteredItems(filteredItems)
            setTableItemsArr(sliceOfPage(filteredItems, currentPage, itemsPerPage))
            setTotalPages(totalPages)
        }
    }, [currentPage, status, currentItemPerPage, itemsPerPage, searchedId])

    return (
        <div className=" w-full">
            <table className="table-auto w-full ">
                <thead className="border-b-[1px] border-dashed">
                    <tr className="text-text-gray text-[12px] font-semibold ">
                        <th className="flex gap-[20px] items-center py-[8px]">
                            <Checkbox
                                isSelected={isAllSelected}
                                isAllSelected={isAllSelected}
                                selectAll={selectAll}
                            />
                            ID
                        </th>
                        <th>DATE REMOVED</th>
                        <th>LINK</th>
                        <th>SOURCE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelItemsArr.map((item: Item) => {
                        return (
                            <tr
                                key={item.id}
                                className="text-center border-b-[1px] text-[14px] hover:bg-hover-blue transition duration-200 ease-out"
                            >
                                <td className="flex gap-[20px] items-center py-[23px] font-semibold">
                                    <Checkbox
                                        isSelected={item.isSelected}
                                        isAllSelected={isAllSelected}
                                    />
                                    {item.id}
                                </td>
                                <td className="font-semibold text-secondary-gray">
                                    {item.dataRemoved}
                                </td>
                                <td className="font-semibold text-primary-blue">
                                    <a className="cursor-pointer" href={item.link}>
                                        {item.link}
                                    </a>
                                </td>
                                <td className="font-semibold text-secondary-gray">
                                    {' '}
                                    {item.source}
                                </td>
                                {item.action ? (
                                    <td className="font-semibold text-primary-green">
                                        <span className="bg-secondary-green p-[7px] rounded">
                                            Removed
                                        </span>
                                    </td>
                                ) : (
                                    <td className="font-semibold text-primary-red">
                                        <span className="bg-secondary-red p-[7px] rounded">
                                            Delisted
                                        </span>
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
