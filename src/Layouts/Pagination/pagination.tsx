import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Pagination = () => {
    return (
        <div className="bg-[rgb(240,240,240)] dark:bg-darkFourthBlack font-danafa font-semibold py-4 rounded-xl items-center gap-1.5 flex justify-center text-ThirdGray">

            <div className="w-10 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-main hover:text-lightWhite transition-colors duration-300 hover:border hover:border-main">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div className="w-10 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-main hover:text-lightWhite transition-colors duration-300 hover:border hover:border-main">1</div>

            <div className="w-10 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-main hover:text-lightWhite transition-colors duration-300 hover:border hover:border-main">2</div>

            <div className="w-10 aspect-square rounded-full flex justify-center items-center bg-lightWhite cursor-not-allowed">3</div>

            <div className="w-10 aspect-square rounded-full flex justify-center items-center cursor-pointer hover:bg-main hover:text-lightWhite transition-colors duration-300 hover:border hover:border-main">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>

        </div>
    )
}
export default Pagination