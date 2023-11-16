interface IProps {
    img: string
    text: string
}

export const LoginCard: React.FC<IProps> = ({ img, text }) => {
    return (
        <div className="border-border-gray hover:bg-thirdy-gray cursor-pointer border-[1px] rounded-md pr-[15px] flex gap-[12px] items-center font-semibold">
            <div className="p-[12px]">
                <img src={img} alt={text} />
            </div>
            <p>Sign in with {text}</p>
        </div>
    )
}
