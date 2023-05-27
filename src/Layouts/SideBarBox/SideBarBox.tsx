const SideBarBox = ({ children, title, sticky }: T_SideBarBox) => {
    return (
        <div
            className={`SideBarBox courseCardShadow rounded-lg ${
                sticky ? "sticky top-6" : undefined
            }`}
        >
            <div className="bg-lightFourthWhite dark:bg-[#26282a] dark:border-darkThirdBlack border border-SecondaryGray/40 rounded-t-md p-2 pr-3.5 font-bold">
                {title}
            </div>
            <div className=" dark:bg-darkFourthBlack border-transparent">
                {children}
            </div>
        </div>
    )
}
export default SideBarBox
