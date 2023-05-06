import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchInput = () => {
    return (
        <div className="p-3 bg-lightFourthWhite rounded-xl flex items-center gap-2">
            <FontAwesomeIcon
                icon={faSearch}
                className="text-lg text-ThirdGray pt-1 cursor-pointer"
            />
            <input type="text" className="bg-transparent text-Gray outline-none" placeholder="جستوجو..." />
        </div>
    )
}
export default SearchInput