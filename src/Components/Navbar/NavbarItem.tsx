interface IProps {
    img: string
    description: string
}

export const NavbarItem: React.FC<IProps> = ({ img, description }) => {
    return (
        <div className="group flex gap-3 py-2 px-2.5 font-semibold hover:bg-hover-blue hover:text-primary-blue rounded-md cursor-pointer	">
            <img className="group-hover:fill-primary-blue" src={img} alt={description} />
            {description}
        </div>
    )
}
