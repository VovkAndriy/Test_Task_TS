interface IProps {
    img: string
    description: string
}

export const NavbarItem: React.FC<IProps> = ({ img, description }) => {
    return (
        <div className="group flex gap-[12px] py-[8px] px-[10px] font-semibold hover:bg-hover-blue hover:text-primary-blue rounded-md cursor-pointer	">
            <img className="group-hover:fill-primary-blue" src={img} alt={description} />
            {description}
        </div>
    )
}
