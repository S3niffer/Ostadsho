import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const SearchInput = () => {

    const [isInputFocoused, SetisInputFocoused] = useState(false)

    const statusChanger = () => {
        SetisInputFocoused(prv => !prv)
    }
    return (
        <div className="p-3 bg-lightFourthWhite group dark:bg-darkBlack rounded-xl flex items-center gap-2">
            <FontAwesomeIcon
                icon={faSearch}
                className={`text-lg cursor-pointer ${isInputFocoused ? 'text-Gray dark:text-SecondaryGray' : 'text-SecondaryGray dark:text-Gray'}`}
            />
            <input
                type="text"
                onFocus={statusChanger}
                onBlur={statusChanger}
                className="bg-transparent text-dark w-full dark:text-SecondaryGray outline-none focus:text-Gray placeholder:focus:text-Gray dark:focus:text-SecondaryGray dark:placeholder:focus:text-SecondaryGray"
                placeholder="جستوجو..."
            />
        </div>
    )
}
export default SearchInput