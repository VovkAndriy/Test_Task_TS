import { useEffect, useState } from 'react'
import { Item } from '../../mocks/ItemTableList'
import { Checkbox } from '../Checkbox/Checkbox'
import { getCurrentDate, getMonthIndex, getMonthName } from '../Utils/date'
import { sliceOfPage } from '../Utils/sliceOfPage'

interface IProps {
    status: string
    dayTime: string
    currentItemPerPage: Item[]
    currentPage: number
    allPages: number
    setTotalPages: React.Dispatch<React.SetStateAction<number>>
    setFilteredItems: React.Dispatch<React.SetStateAction<Item[]>>
    searchedId?: number
}

export const Table: React.FC<IProps> = ({
    status,
    dayTime,
    currentItemPerPage,
    currentPage,
    allPages,
    setTotalPages,
    setFilteredItems,
    searchedId,
}) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false)
    const [tabelItemsArr, setTableItemsArr] = useState<Item[]>(currentItemPerPage)
    const selectAll = () => {
        setIsAllSelected(prev => !prev)
    }
    const itemsPerPage: number = 5
    let totalPages: number = 0

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

        const filterItemsByDate = () => {
            const currentDate = getCurrentDate()

            switch (dayTime) {
                case 'Today':
                    return filteredItems.filter(item => item.dataRemoved === currentDate)
                case 'Yesterday':
                    const yesterday = new Date(currentDate)
                    yesterday.setDate(yesterday.getDate() - 1)
                    const formattedYesterday = formatDate(yesterday)
                    return filteredItems.filter(item => item.dataRemoved === formattedYesterday)
                case 'This Week':
                    const startOfWeek = new Date(currentDate)

                    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
                    const endOfWeek = new Date(startOfWeek)
                    endOfWeek.setDate(startOfWeek.getDate() + 6)
                    return filteredItems.filter(
                        item =>
                            new Date(item.dataRemoved) >= startOfWeek &&
                            new Date(item.dataRemoved) <= endOfWeek
                    )
                case 'This Month':
                    const startOfMonth = new Date(
                        Number(currentDate.split(' ')[2]),
                        getMonthIndex(currentDate.split(' ')[1]),
                        1
                    )

                    const endOfMonth = new Date(startOfMonth)
                    endOfMonth.setMonth(endOfMonth.getMonth() + 1)
                    endOfMonth.setDate(endOfMonth.getDate() - 1)

                    return filteredItems.filter(
                        item =>
                            new Date(item.dataRemoved) >= startOfMonth &&
                            new Date(item.dataRemoved) <= endOfMonth
                    )
                default:
                    return filteredItems
            }
        }

        const formatDate = (date: any) => {
            return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`
        }

        const filteredItems = filterItemsByStatus()
        const filteredItemsWithDate = filterItemsByDate()

        if (searchedId) {
            totalPages = Math.ceil(filterItemsById().length / itemsPerPage)
            setFilteredItems(filterItemsById())
            setTableItemsArr(sliceOfPage(filterItemsById(), currentPage, itemsPerPage))
        } else {
            totalPages = Math.ceil(filteredItemsWithDate.length / itemsPerPage)
            setFilteredItems(filteredItemsWithDate)
            setTableItemsArr(sliceOfPage(filteredItemsWithDate, currentPage, itemsPerPage))
        }

        setTotalPages(totalPages)
    }, [currentPage, status, currentItemPerPage, itemsPerPage, searchedId, dayTime])

    return (
        <div className=" w-full overflow-x-auto">
            <table className="table-auto w-full">
                <thead className="w-full border-b border-dashed">
                    <tr className="w-full  flex justify-between items-center text-text-gray text-xs font-semibold ">
                        <th className="min-w-[125px] flex gap-5 items-center py-2">
                            <Checkbox
                                isSelected={isAllSelected}
                                isAllSelected={isAllSelected}
                                selectAll={selectAll}
                            />
                            ID
                        </th>
                        <th className="min-w-[125px]">DATE REMOVED</th>
                        <th className="min-w-[125px] text-left">LINK</th>
                        <th className="min-w-[125px]">SOURCE</th>
                        <th className="min-w-[125px] text-right">ACTION</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col">
                    {allPages > 0 ? (
                        tabelItemsArr.map((item: Item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="text-center  border-b flex items-center justify-between text-sm hover:bg-hover-blue transition duration-200 ease-out"
                                >
                                    <td className="flex gap-5 min-w-[125px] items-center py-6 font-semibold">
                                        <Checkbox
                                            isSelected={item.isSelected}
                                            isAllSelected={isAllSelected}
                                        />
                                        {item.id}
                                    </td>
                                    <td className="font-semibold min-w-[125px] text-secondary-gray">
                                        {item.dataRemoved}
                                    </td>
                                    <td className="font-semibold min-w-[125px] text-primary-blue">
                                        <a className="cursor-pointer" href={item.link}>
                                            {item.link}
                                        </a>
                                    </td>
                                    <td className="font-semibold min-w-[125px] text-secondary-gray">
                                        {item.source}
                                    </td>
                                    {item.action ? (
                                        <td className="font-semibold min-w-[125px] text-primary-green flex justify-end">
                                            <span className="bg-secondary-green p-2 rounded">
                                                Removed
                                            </span>
                                        </td>
                                    ) : (
                                        <td className="font-semibold min-w-[125px] text-primary-red flex justify-end">
                                            <span className="bg-secondary-red p-2 rounded">
                                                Delisted
                                            </span>
                                        </td>
                                    )}
                                </tr>
                            )
                        })
                    ) : (
                        <div className="w-full text-center py-5">
                            <p className="text-text-gray text-lg font-semibold">No Items Found</p>
                        </div>
                    )}
                </tbody>
            </table>
        </div>
    )
}
