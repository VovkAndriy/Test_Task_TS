import React, { useState } from 'react'
import userIcon from '../../assets/icons/users.svg'

interface SearchInputProps {
    onSearch: (query: string) => void
    setSearchedId: React.Dispatch<React.SetStateAction<number>>
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch, setSearchedId }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        handleSearch(e.target.value)
    }

    const handleSearch = (value: string) => {
        onSearch(value)

        const searchedId = parseInt(value, 10)
        // @ts-ignore
        setSearchedId(isNaN(searchedId) ? null : searchedId)
    }

    return (
        <div className="flex items-center gap-2 bg-thirdy-gray rounded-md">
            <img className="p-2" src={userIcon} alt="user" />
            <input
                value={searchValue}
                onChange={handleInputChange}
                className="bg-thirdy-gray outline-none rounded-r-md p-2 max-w-[130px]"
                type="text"
                placeholder="Search"
            />
        </div>
    )
}
