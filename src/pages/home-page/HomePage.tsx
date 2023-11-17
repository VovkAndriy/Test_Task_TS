import { useEffect, useState } from 'react'
import { CardItem } from '../../Components/CardItem/CardItem'
import { DayTimeDown } from '../../Components/DayTimeDown/DayTimeDown'
import { Export } from '../../Components/Export/Export'
import { Header } from '../../Components/Header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import { PagePagination } from '../../Components/PagePagination/PagePagination'
import { SearchInput } from '../../Components/SearchInput/SearchInput'
import { StatusDropdown } from '../../Components/StatusDropdown/StatusDropdown'
import { Table } from '../../Components/Table/Table'
import itNetwork from '../../assets/icons/it-network.svg'
import loop from '../../assets/icons/loop.svg'
import support from '../../assets/icons/support.svg'
import trash from '../../assets/icons/trash.svg'
import { Item, ItemList } from '../../mocks/ItemTableList'

interface ICardItem {
    img: string
    description: string
    borderStyle: string
    iconStyle: string
}

const CardItems: ICardItem[] = [
    {
        img: itNetwork,
        description: 'Links Scraped',
        borderStyle: 'border-b-primary-blue',
        iconStyle: 'bg-hover-blue',
    },
    {
        img: loop,
        description: 'Links Manually Checked',
        borderStyle: 'border-b-primary-purple',
        iconStyle: 'bg-secondary-purple',
    },
    {
        img: support,
        description: 'Link Violations',
        borderStyle: 'border-b-primary-yellow',
        iconStyle: 'bg-secondary-yellow',
    },
    {
        img: trash,
        description: 'Links Removed',
        borderStyle: 'border-b-primary-red',
        iconStyle: 'bg-secondary-red',
    },
]

export const HomePage = () => {
    const [status, setStatus] = useState<string>('All')
    const [dayTime, setDayTime] = useState<string>('All Time')
    const [listItems, setListItems] = useState<Item[]>(ItemList)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState(0)
    const [searchedId, setSearchedId] = useState<number>(0)
    const [filteredItems, setFilteredItems] = useState<Item[]>(ItemList)

    const itemsPerPage: number = 5

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) {
            return
        }
        setCurrentPage(page)
    }
    useEffect(() => {
        setCurrentPage(1)
    }, [status, dayTime, searchedId])

    const handleSearch = (query: string) => {
        const filtered = ItemList.filter(item => String(item.id).includes(query))
        setFilteredItems(filtered)
        setTotalPages(Math.ceil(filtered.length / itemsPerPage))
    }
    return (
        <div className="">
            <Header />
            <div className="flex">
                <Navbar />
                <div className="p-7 bg-secondary-color w-full">
                    <div className="flex items-center gap-2 justify-end">
                        <p className="text-text-gray font-medium">Sort by</p>
                        <DayTimeDown
                            setDayTimeAction={setDayTime}
                            closeStyle="hover:bg-hover-blue hover:text-primary-blue bg-primary-color text-primary-black"
                            activeStyle=" bg-hover-blue text-primary-blue rounded-md"
                            notActiveStyle="text-primary-black"
                        />
                    </div>
                    <div className="py-7 text-text-gray lOverflow:overflow-x-auto flex gap-7">
                        {CardItems.map((item, index) => (
                            <CardItem
                                key={index}
                                img={item.img}
                                description={item.description}
                                borderStyle={item.borderStyle}
                                iconStyle={item.iconStyle}
                            />
                        ))}
                    </div>
                    <div className="bg-primary-color p-7 rounded-xl">
                        <div className="flex pb-7 justify-between s:flex-wrap m:gap-5">
                            <SearchInput onSearch={handleSearch} setSearchedId={setSearchedId} />
                            <div className="flex items-center gap-5">
                                <Export />
                                <DayTimeDown
                                    setDayTimeAction={setDayTime}
                                    closeStyle="hover:bg-hover-blue hover:text-primary-blue bg-thirdy-gray text-text-gray"
                                    activeStyle=" bg-hover-blue text-primary-blue rounded-md"
                                    notActiveStyle="text-text-gray"
                                />
                                <StatusDropdown setStatusAction={setStatus} />
                            </div>
                        </div>
                        <Table
                            status={status}
                            dayTime={dayTime}
                            currentItemPerPage={listItems}
                            currentPage={currentPage}
                            setTotalPages={setTotalPages}
                            allPages={totalPages}
                            setFilteredItems={setFilteredItems}
                            searchedId={searchedId}
                        />
                        <div className="flex justify-between s:flex-col-reverse	">
                            <div className="p-2.5 text-text-gray font-semibold bg-thirdy-gray rounded-md mt-2.5">
                                Total Result: {filteredItems.length}
                            </div>
                            <PagePagination
                                handlePageChange={handlePageChange}
                                totalPages={totalPages}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
