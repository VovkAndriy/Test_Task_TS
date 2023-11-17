interface IProps {
    img: string
    title: string
    description: string
    handleCardSelect: (cardTitle: string) => void
    isSelected: boolean
}

export const AccountTypeCard: React.FC<IProps> = ({
    img,
    title,
    description,
    handleCardSelect,
    isSelected,
}) => {
    const changeSelect = () => {
        handleCardSelect(title)
    }

    return (
        <div
            className={`group p-6 flex items-center gap-4 border-border-gray border border-dashed rounded-lg ${
                isSelected && 'border-border-blue bg-hover-blue'
            } cursor-pointer `}
            onClick={changeSelect}
        >
            <div>
                <img src={img} alt={title} />
            </div>
            <div className="">
                <h2 className="font-semibold text-base">{title}</h2>
                <p className="font-medium text-sm text-text-gray ">{description}</p>
            </div>
        </div>
    )
}
