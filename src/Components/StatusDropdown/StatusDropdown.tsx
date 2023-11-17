import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface statusDropDown {
    value: string
}

const statusList: statusDropDown[] = [
    {
        value: 'All',
    },
    {
        value: 'Removed',
    },
    {
        value: 'Delisted',
    },
]

interface IProps {
    setStatusAction: React.Dispatch<React.SetStateAction<string>>
}

export const StatusDropdown: React.FC<IProps> = ({ setStatusAction }) => {
    const [status, setStatus] = useState<string>('Status')

    const changeTimeValue = (value: string): void => {
        setStatus(value)
        setStatusAction(value)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-thirdy-gray px-3 py-2 text-sm font-semibold text-text-gray shadow-sm  hover:bg-hover-blue hover:text-primary-blue">
                    {status}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-35 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 m-1.5">
                        {statusList.map((item, index) => (
                            <div key={index}>
                                <Menu.Item>
                                    {({ active }: { active: any }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? ' bg-hover-blue text-primary-blue rounded-md'
                                                    : 'text-text-gray',
                                                'block px-4 py-2 text-sm font-semibold'
                                            )}
                                            onClick={() => {
                                                changeTimeValue(item.value)
                                            }}
                                        >
                                            {item.value}
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
