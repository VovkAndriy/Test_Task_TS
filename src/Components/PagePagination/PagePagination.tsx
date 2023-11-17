import ChevronLeftIcon from '@heroicons/react/20/solid/ChevronLeftIcon'
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon'
import { useEffect, useState } from 'react'
import { PaginationButton } from './PaginationButton'

interface IProps {
    totalPages: number
    currentPage: number
    handlePageChange: (page: number) => void
}

export const PagePagination: React.FC<IProps> = ({ totalPages, handlePageChange, currentPage }) => {
    const [isDisabledLeft, setIsDisabledLeft] = useState<boolean>(currentPage < 2)
    const [isDisabledRight, setIsDisabledRight] = useState<boolean>(currentPage > totalPages - 1)
    console.log(currentPage, totalPages, currentPage > totalPages - 1)

    useEffect(() => {
        setIsDisabledLeft(currentPage < 2)
        setIsDisabledRight(currentPage > totalPages - 1)
    }, [currentPage])

    const pressBut = (value: string) => {
        if (value === 'left' && currentPage > 1) {
            handlePageChange(currentPage - 1)
        } else if (value === 'right' && currentPage < totalPages) {
            handlePageChange(currentPage + 1)
        }
    }

    const renderPages = () => {
        if (totalPages < 5) {
            return Array.from({ length: totalPages }).map((_, index) => {
                return (
                    <div key={index}>
                        <PaginationButton
                            handlePageChange={() => handlePageChange(index + 1)}
                            index={index}
                            currentPage={currentPage}
                        />
                    </div>
                )
            })
        } else {
            const stepToMove = currentPage + 4 > totalPages ? totalPages : currentPage + 4
            const indexToMove = totalPages - currentPage - 4 < 0 ? totalPages - 5 : currentPage - 1
            return Array.from({ length: totalPages })
                .map((_, index) => index)
                .slice(indexToMove, stepToMove)
                .map(el => {
                    return (
                        <div key={el}>
                            <PaginationButton
                                handlePageChange={() => handlePageChange(el + 1)}
                                index={el}
                                currentPage={currentPage}
                            />
                        </div>
                    )
                })
        }
    }

    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 s:p-0 s:pt-3">
            <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    {totalPages > 0 && (
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md"
                            aria-label="Pagination"
                        >
                            <button
                                className={`relative inline-flex items-center px-2 py-2 text-gray-400 hover:bg-gray-50 ${
                                    isDisabledLeft && 'hover:bg-primary-color'
                                }`}
                                onClick={() => pressBut('left')}
                                disabled={isDisabledLeft}
                            >
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {renderPages()}
                            <button
                                className={`relative inline-flex items-center px-2 py-2 text-gray-400 hover:bg-gray-50 ${
                                    isDisabledRight && 'hover:bg-primary-color'
                                }`}
                                onClick={() => pressBut('right')}
                                disabled={isDisabledRight}
                            >
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}
