import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
    const [isInputFocoused, SetisInputFocoused] = useState(false)
    const Navigate = useNavigate()

    const statusChanger = () => {
        SetisInputFocoused(prv => !prv)
    }
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                const value: string = e.currentTarget.search.value
                const SplitedValue = value.split(" ")
                const JoinedValue = SplitedValue.join("+")
                Navigate(`/search?${JoinedValue}`)
            }}
            className='group flex w-full max-w-lg items-center gap-2 rounded-xl bg-lightFourthWhite p-3 dark:bg-darkBlack'
        >
            <FontAwesomeIcon
                icon={faSearch}
                className={`cursor-pointer text-lg ${
                    isInputFocoused ? "text-Gray dark:text-SecondaryGray" : "text-SecondaryGray dark:text-Gray"
                }`}
            />
            <input
                name='search'
                type='text'
                onFocus={statusChanger}
                onBlur={statusChanger}
                className='text-dark w-full bg-transparent outline-none focus:text-Gray placeholder:focus:text-Gray dark:text-SecondaryGray dark:focus:text-SecondaryGray dark:placeholder:focus:text-SecondaryGray'
                placeholder='جستوجو...'
            />
        </form>
    )
}
export default SearchInput
