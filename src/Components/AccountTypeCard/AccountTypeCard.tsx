interface IProps {
    img: string
    title: string
    description: string
}

export const AccountTypeCard: React.FC<IProps> = ({ img, title, description }) => {
    return (
        <div className="group p-[24px] flex items-center gap-[16px] border-border-gray border-[1px] border-dashed rounded-lg hover:border-border-blue hover:bg-hover-blue">
            <div>
                <img src={img} alt={title} />
                {/* <svg href={img} /> */}
            </div>
            <div className="">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
