import ChevronLeftIcon from '@heroicons/react/20/solid/ChevronLeftIcon'
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon'
import { useState } from 'react'

interface IProps {
    totalPages: number
    currentPage: number
    handlePageChange: (page: number) => void
}

export const PagePagination: React.FC<IProps> = ({ totalPages, handlePageChange, currentPage }) => {
    const [isCurrentPage, setIsCurrentPage] = useState<number>(1)

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center text-gray-400 s px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
