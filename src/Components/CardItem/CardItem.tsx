interface IProps {
    img: string
    description: string
    borderStyle: string
    iconStyle: string
}

export const CardItem: React.FC<IProps> = ({ img, description, borderStyle, iconStyle }) => {
    return (
        <div
            className={`p-7 w-full bg-primary-color rounded-xl border-b-4 max-w-[500px] min-w[260px] ${borderStyle}`}
        >
            <div className="flex justify-between">
                <p className="text-primary-black text-4xl w-[150px] font-semibold">252</p>
                <div className={`flex text-fifthy-gray justify-center  px-4 rounded ${iconStyle}`}>
                    <img src={img} alt={description} />
                </div>
            </div>
            {description}
        </div>
    )
}
