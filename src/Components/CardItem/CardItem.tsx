interface IProps {
    img: string
    description: string
    borderStyle: string
    iconStyle: string
}

export const CardItem: React.FC<IProps> = ({ img, description, borderStyle, iconStyle }) => {
    return (
        <div className={`p-[28px] bg-primary-color rounded-xl border-b-[3px] ${borderStyle}`}>
            <div className="flex justify-between">
                <p className="text-primary-black text-[34px] w-[150px] font-semibold">252</p>
                <div className={`flex justify-center  px-[16px] rounded ${iconStyle}`}>
                    <img src={img} alt={description} />
                </div>
            </div>
            {description}
        </div>
    )
}
