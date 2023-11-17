import arrows from '../../assets/icons/arrows.svg'

export const Export = () => {
    return (
        <div className="flex cursor-pointer py-2 px-3 gap-1 text-sm font-bold bg-thirdy-gray rounded-md hover:bg-hover-blue text-text-gray hover:text-primary-blue">
            <img src={arrows} />
            Export
        </div>
    )
}
