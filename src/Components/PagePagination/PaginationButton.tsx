interface IProps {
    index: number
    handlePageChange: () => void
    currentPage: number
}

export const PaginationButton: React.FC<IProps> = ({ index, handlePageChange, currentPage }) => {
    const handleClick = () => {
        handlePageChange()
    }

    return (
        <button
            aria-current="page"
            className={`relative items-center px-4 py-2 text-sm rounded-md font-semibold  ${
                currentPage - 1 !== index && 'hover:bg-gray-50 text-text-gray'
            } ${currentPage - 1 === index && 'bg-primary-blue text-primary-color'}  md:inline-flex`}
            onClick={() => handleClick()}
        >
            {index + 1}
        </button>
    )
}
