import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Accordion = ({ name, episodes }: T_chapter) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=''>
            <div
                className={`flex cursor-pointer flex-col overflow-hidden  rounded-lg border bg-lightWhite transition-all duration-1000 dark:border-darkThirdBlack dark:bg-darkBlack ${
                    !isOpen ? "max-h-11 bml:max-h-[3.4rem]" : "max-h-screen border-main dark:border-main"
                }`}
            >
                <div
                    onClick={() => setIsOpen(p => !p)}
                    className='flex items-center justify-between border-b p-3 text-sm dark:border-b-darkThirdBlack md:text-base bml:text-lg'
                >
                    <p>{name}</p>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={` transition-all duration-150 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </div>
                <div className='flex flex-col'>
                    {/*  */}
                    {episodes.map(episode => (
                        <div
                            key={episode.id}
                            className='group flex items-center justify-between border-b border-b-lightFourthWhite bg-lightWhite p-3 text-xs hover:bg-light_green dark:border-b-darkFourthBlack dark:bg-darkBlack dark:hover:bg-light_green md:text-sm'
                        >
                            <div className='flex items-center gap-2'>
                                <span className='flex aspect-square w-6 items-center justify-center rounded-full border pt-1 dark:border-Gray md:w-7 lg:w-8 lg:text-base'>
                                    {episode.id}
                                </span>
                                <p className='dark:text-lightThirdWhite bml:text-[16px]'>{episode.title}</p>
                            </div>
                            <div className='btn-green flex items-center gap-1 rounded-full px-2 text-[16px] text-xs group-hover:bg-main group-hover:text-lightWhite'>
                                <span className='py-1'>مشاهده</span>
                                <FontAwesomeIcon icon={faPlayCircle} />
                            </div>
                        </div>
                    ))}
                    {/*  */}
                </div>
            </div>
        </div>
    )
}
export default Accordion
