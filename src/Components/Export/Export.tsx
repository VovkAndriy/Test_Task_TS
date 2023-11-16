import arrows from '../../assets/icons/arrows.svg'

export const Export = () => {
    return (
        <div className="flex py-[9px] px-[12px] gap-[5px] text-[13px] font-bold bg-thirdy-gray rounded-md hover:bg-hover-blue text-text-gray hover:text-primary-blue">
            <img src={arrows} />
            Export
        </div>
    )
}
