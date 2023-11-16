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
    }

    const handleSearch = () => {
        onSearch(searchValue)
        setSearchedId(parseInt(searchValue))
    }

    return (
        <div className="flex items-center gap-2 bg-third-gray rounded-md">
            <img className="p-2" src={userIcon} alt="user" />
            <input
                value={searchValue}
                onChange={handleInputChange}
                className="bg-third-gray outline-none rounded-r-md p-2"
                type="text"
                placeholder="Search by ID"
            />
            <button
                onClick={handleSearch}
                className="bg-primary-blue text-white px-4 py-2 rounded-md"
            >
                Search
            </button>
        </div>
    )
}
