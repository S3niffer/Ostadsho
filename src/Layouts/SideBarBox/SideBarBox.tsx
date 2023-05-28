const SideBarBox = ({ children, title, sticky }: T_SideBarBox) => {
    return (
        <div className={`SideBarBox courseCardShadow rounded-lg ${sticky ? "sticky top-6" : undefined}`}>
            <div className='rounded-t-md border border-SecondaryGray/40 bg-lightFourthWhite p-2 pr-3.5 font-bold dark:border-darkThirdBlack dark:bg-[#26282a]'>
                {title}
            </div>
            <div className=' border-transparent dark:bg-darkFourthBlack'>{children}</div>
        </div>
    )
}
export default SideBarBox
