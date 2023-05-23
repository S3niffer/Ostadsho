import { ReactNode } from "react"

const SideBarBox = ({ children, title }: { title: string, children: ReactNode }) => {
    return (
        <div className="SideBarBox courseCardShadow rounded-md">
            <div className="bg-lightFourthWhite dark:bg-[#26282a] dark:border-darkThirdBlack border border-SecondaryGray/40 rounded-t-md p-1.5 pr-3.5">
                {title}
            </div>
            <div className="pt-2.5 dark:bg-darkFourthBlack">
                {
                    children
                }
            </div>
        </div>
    )
}
export default SideBarBox