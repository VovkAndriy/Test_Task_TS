interface IProps {
    img: string
    text: string
}

export const LoginCard: React.FC<IProps> = ({ img, text }) => {
    return (
        <div className=" w-full border-border-gray hover:bg-thirdy-gray cursor-pointer border rounded-md pr-4 flex gap-4 items-center font-semibold">
            <div className="p-4">
                <img src={img} alt={text} />
            </div>
            <p>Sign in with {text}</p>
        </div>
    )
}
