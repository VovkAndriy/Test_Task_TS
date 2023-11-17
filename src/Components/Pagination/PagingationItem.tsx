interface IProps {
    id: number
    title: string
    description: string
    isActive: boolean
}

export const PagingationItem: React.FC<IProps> = ({ id, title, description, isActive }) => {
    return (
        <div className="flex pb-11 justify-center gap-5">
            <div className="flex flex-col items-center">
                <div
                    className={`text-primary-color text-lg font-semibold p-2 w-[46px] h-[46px] l:items-center ${
                        isActive
                            ? 'bg-primary-green text-center rounded-lg'
                            : 'bg-thirdy-black border-forthy-black text-center border- border-dashed rounded-lg'
                    }`}
                >
                    {id}
                </div>
            </div>
            <div className={` ${!isActive && 'opacity-70'} text-primary-color`}>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className={`${isActive && 'opacity-70'} text-sm font-medium`}>{description}</p>
            </div>
        </div>
    )
}
