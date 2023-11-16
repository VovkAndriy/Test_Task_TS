import { useState } from 'react'

interface IProps {
    id: number
    title: string
    description: string
    isActive: boolean
}

export const PagingationItem: React.FC<IProps> = ({ id, title, description, isActive }) => {
    const [isChoose, setIsChoose] = useState<boolean>(isActive)
    return (
        <div className="flex pb-[45px] items-center gap-[20px]">
            {isActive ? (
                <>
                    <div className="text-primary-color text-[18px] font-semibold p-[8px] w-[46px] h-[46px] bg-primary-green text-center	rounded-lg">
                        {id}
                    </div>
                    <div className=" text-primary-color">
                        <h2 className="text-[20px] font-semibold">{title}</h2>
                        <p className="opacity-70 text-[13px] font-medium	">{description}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="text-primary-color text-[18px] font-semibold p-[8px] w-[46px] bg-thirdy-black border-forthy-black h-[46px] text-center border-[1px] border-dashed	rounded-lg">
                        {id}
                    </div>
                    <div className="opacity-70 text-primary-color">
                        <h2 className="text-[20px] font-semibold">{title}</h2>
                        <p className="text-[13px] font-medium	">{description}</p>
                    </div>
                </>
            )}
        </div>
    )
}
