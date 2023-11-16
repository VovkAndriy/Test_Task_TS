interface IProps {
    placeholder: string
    type?: string
}

export const Input: React.FC<IProps> = ({ placeholder, type }) => {
    return (
        <input
            className="px-[12px] py-[10px] outline-none border-border-color border-[1px] rounded-md text-primary-black"
            placeholder={placeholder}
            type={type}
        />
    )
}
