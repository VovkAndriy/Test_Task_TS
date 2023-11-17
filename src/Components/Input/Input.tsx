import React from 'react'

interface IProps {
    placeholder: string
    type?: string
}

export const Input: React.FC<IProps> = ({ placeholder, type }) => {
    return (
        <input
            className="w-full px-4 py-3.5 outline-none border border-border-color rounded-md text-primary-black"
            placeholder={placeholder}
            type={type}
        />
    )
}
