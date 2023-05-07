import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchInput = () => {
    return (
        <div className="p-3 bg-lightFourthWhite dark:bg-darkBlack rounded-xl flex items-center gap-2">
            <FontAwesomeIcon
                icon={faSearch}
                className="text-lg text-ThirdGray pt-1 cursor-pointer"
            />
            <input type="text" className="bg-transparent dark:text-SecondaryGray outline-none" placeholder="جستوجو..." />
        </div>
    )
}
export default SearchInput