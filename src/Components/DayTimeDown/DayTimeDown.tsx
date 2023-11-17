import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface dataDropDown {
    value: string
}

const dataTime: dataDropDown[] = [
    {
        value: 'All Time',
    },
    {
        value: 'Today',
    },
    {
        value: 'Yesterday',
    },
    {
        value: 'This Week',
    },
    {
        value: 'This Month',
    },
]

interface IProps {
    setDayTimeAction: React.Dispatch<React.SetStateAction<string>>
    closeStyle: string
    activeStyle: string
    notActiveStyle: string
}

export const DayTimeDown: React.FC<IProps> = ({
    setDayTimeAction,
    closeStyle,
    activeStyle,
    notActiveStyle,
}) => {
    const [time, setTime] = useState<string>('All Time')

    const changeTimeValue = (value: string): void => {
        setTime(value)
        setDayTimeAction(value)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className={`inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm  ${closeStyle}`}
                >
                    {time}
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 m-1.5">
                        {dataTime.map((item, index) => (
                            <div key={index}>
                                <Menu.Item>
                                    {({ active }: { active: any }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? `${activeStyle}` : `${notActiveStyle}`,
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
