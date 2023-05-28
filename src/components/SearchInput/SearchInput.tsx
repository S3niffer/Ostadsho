import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const SearchInput = () => {
    const [isInputFocoused, SetisInputFocoused] = useState(false)

    const statusChanger = () => {
        SetisInputFocoused(prv => !prv)
    }
    return (
        <div className='group flex items-center gap-2 rounded-xl bg-lightFourthWhite p-3 dark:bg-darkBlack'>
            <FontAwesomeIcon
                icon={faSearch}
                className={`cursor-pointer text-lg ${
                    isInputFocoused ? "text-Gray dark:text-SecondaryGray" : "text-SecondaryGray dark:text-Gray"
                }`}
            />
            <input
                type='text'
                onFocus={statusChanger}
                onBlur={statusChanger}
                className='text-dark w-full bg-transparent outline-none focus:text-Gray placeholder:focus:text-Gray dark:text-SecondaryGray dark:focus:text-SecondaryGray dark:placeholder:focus:text-SecondaryGray'
                placeholder='جستوجو...'
            />
        </div>
    )
}
export default SearchInput
