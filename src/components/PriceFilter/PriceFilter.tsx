import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactSlider from "react-slider"

const PriceFilter = (props: T_PriceFillter) => {
    const { highestPrice, _FillterPriceHandler } = props
    const [priceRange, setPriceRange] = useState<T_PriceRange>({
        min: "0",
        max: highestPrice.toString(),
    })
    const { Category_Name } = useParams()

    const ValueConverter = (value: string) => {
        let removeComa = value
            .split("")
            .filter(letter => letter !== ",")
            .join("")
        let NUM_Value = Number(removeComa) || 0
        if (NUM_Value > highestPrice) {
            NUM_Value = highestPrice
        }
        return NUM_Value.toString()
    }
    useEffect(() => {
        setPriceRange({ min: "0", max: highestPrice.toString() })
        _FillterPriceHandler(priceRange)
    }, [highestPrice])
    useEffect(() => {
        setPriceRange({ min: "0", max: highestPrice.toString() })
        _FillterPriceHandler(priceRange)
    }, [Category_Name])

    return (
        <div>
            <div className='flex items-center justify-between px-3 py-4'>
                <p className='pl-2 text-lg text-darkBlack dark:text-lightSecondaryWhite'>از</p>
                <input
                    type='text'
                    className='LTR RTL w-full flex-1 border-b border-secnodryMain bg-[#eee] p-0.5 pl-3  text-2xl caret-main outline-none dark:bg-darkThirdBlack'
                    value={Number(priceRange.min).toLocaleString().toString()}
                    onChange={e =>
                        setPriceRange(prv => ({
                            ...prv,
                            min: ValueConverter(e.target.value),
                        }))
                    }
                    onKeyDown={e => {
                        if (e.key === "Enter" && e.currentTarget.value) {
                            _FillterPriceHandler(priceRange)
                        }
                    }}
                />
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='none'
                    viewBox='0 0 15 16'
                    className='mr-2 pt-1 lg:h-6 lg:w-6'
                >
                    <path
                        className='fill-darkBlack dark:fill-lightSecondaryWhite'
                        d='M1.968 6.55c.273 0 .513-.043.72-.13.206-.08.376-.19.51-.33.14-.14.246-.303.32-.49.073-.187.116-.387.13-.6h-.85c-.34 0-.62-.037-.84-.11a1.192 1.192 0 01-.52-.32 1.212 1.212 0 01-.27-.51 3.138 3.138 0 01-.07-.69c0-.253.036-.493.11-.72.073-.233.18-.437.32-.61s.313-.31.52-.41c.213-.107.46-.16.74-.16.22 0 .43.037.63.11.206.073.386.19.54.35.153.153.273.357.36.61.093.253.14.56.14.92v.66h.89c.08 0 .133.037.16.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.08.11-.16.11h-.91c-.014.327-.08.637-.2.93-.114.293-.274.55-.48.77-.207.22-.457.393-.75.52-.294.133-.62.2-.98.2H.988l-.06-.87h1.04zm-.09-3.23c0 .287.066.493.2.62.14.12.406.18.8.18h.79V3.5c0-.42-.084-.72-.25-.9-.16-.187-.387-.28-.68-.28-.274 0-.487.09-.64.27-.147.173-.22.417-.22.73zm5.124.8c.086 0 .143.037.17.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.084.11-.17.11h-1.65c-.087 0-.144-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.016-.277.05-.35.026-.073.083-.11.17-.11h1.65zm1.65 0c.087 0 .143.037.17.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.083.11-.17.11h-1.65c-.087 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.083-.11.17-.11h1.65zm1.65 0c.087 0 .144.037.17.11.034.067.05.173.05.32a.867.867 0 01-.05.34c-.026.073-.083.11-.17.11h-1.65c-.086 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h1.65zm1.65 0c.087 0 .144.037.17.11.034.067.05.173.05.32a.867.867 0 01-.05.34c-.026.073-.083.11-.17.11h-1.65c-.086 0-.143-.033-.17-.1a.802.802 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h1.65zm.911 0c.24 0 .427-.063.56-.19.14-.127.21-.307.21-.54V2.11h.82v1.32c0 .507-.136.897-.41 1.17-.266.267-.64.4-1.12.4h-.97c-.086 0-.143-.033-.17-.1a.802.802 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h.91zm1.66-3.24h-.91V.04h.91v.84zm-1.34 0h-.91V.04h.91v.84zM5.647 12.77c0 .367-.06.71-.18 1.03-.113.327-.277.61-.49.85-.213.24-.473.427-.78.56-.307.14-.65.21-1.03.21h-.61c-.747 0-1.327-.23-1.74-.69-.413-.46-.62-1.09-.62-1.89v-1.77h.81v1.74c0 .52.13.94.39 1.26.26.32.687.48 1.28.48h.44c.3 0 .557-.047.77-.14.22-.093.4-.22.54-.38s.243-.347.31-.56c.067-.213.1-.437.1-.67v-2.69h.81v2.66zm-2.38-2.85h-.98v-.86h.98v.86zM8.231 13c-.18 0-.353-.023-.52-.07a1.134 1.134 0 01-.44-.26 1.311 1.311 0 01-.29-.47c-.073-.2-.11-.447-.11-.74V6.8h.82v4.48c0 .253.054.457.16.61.114.153.29.23.53.23h.2c.147 0 .22.143.22.43 0 .3-.073.45-.22.45h-.35zm2.003-.88c.087 0 .143.037.17.11a.76.76 0 01.05.32.869.869 0 01-.05.34c-.027.073-.083.11-.17.11h-1.65c-.087 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.083-.11.17-.11h1.65zm.13 0c.507 0 .76-.213.76-.64v-.31c0-.567.147-1.013.44-1.34.3-.333.714-.5 1.24-.5.274 0 .514.047.72.14.207.087.38.21.52.37s.244.353.31.58c.074.22.11.463.11.73 0 .587-.15 1.043-.45 1.37-.3.32-.713.48-1.24.48a2.03 2.03 0 01-.77-.15 1.165 1.165 0 01-.56-.53c-.06.14-.133.257-.22.35a1.286 1.286 0 01-.27.21c-.093.047-.193.08-.3.1a2.2 2.2 0 01-.29.02h-.13c-.086 0-.143-.033-.17-.1a.8.8 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h.13zm3.3-.91c0-.293-.066-.533-.2-.72-.126-.187-.353-.28-.68-.28-.3 0-.523.09-.67.27-.14.18-.21.433-.21.76 0 .293.08.513.24.66.167.147.377.22.63.22.3 0 .524-.077.67-.23.147-.16.22-.387.22-.68z'
                    ></path>
                </svg>
            </div>
            <div className='flex items-center justify-between px-3 pb-4'>
                <p className='pl-2 text-lg text-darkBlack dark:text-lightSecondaryWhite'>تا</p>
                <input
                    type='text'
                    className='LTR w-full flex-1 border-b border-secnodryMain bg-[#eee] p-0.5 pl-3 text-2xl  caret-main outline-none dark:bg-darkThirdBlack'
                    value={Number(priceRange.max).toLocaleString().toString()}
                    onChange={e =>
                        setPriceRange(prv => ({
                            ...prv,
                            max: ValueConverter(e.target.value),
                        }))
                    }
                    onKeyDown={e => {
                        if (e.key === "Enter" && e.currentTarget.value) {
                            _FillterPriceHandler(priceRange)
                        }
                    }}
                />
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='none'
                    viewBox='0 0 15 16'
                    className='mr-2 pt-1 lg:h-6 lg:w-6'
                >
                    <path
                        className='fill-darkBlack dark:fill-lightSecondaryWhite'
                        d='M1.968 6.55c.273 0 .513-.043.72-.13.206-.08.376-.19.51-.33.14-.14.246-.303.32-.49.073-.187.116-.387.13-.6h-.85c-.34 0-.62-.037-.84-.11a1.192 1.192 0 01-.52-.32 1.212 1.212 0 01-.27-.51 3.138 3.138 0 01-.07-.69c0-.253.036-.493.11-.72.073-.233.18-.437.32-.61s.313-.31.52-.41c.213-.107.46-.16.74-.16.22 0 .43.037.63.11.206.073.386.19.54.35.153.153.273.357.36.61.093.253.14.56.14.92v.66h.89c.08 0 .133.037.16.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.08.11-.16.11h-.91c-.014.327-.08.637-.2.93-.114.293-.274.55-.48.77-.207.22-.457.393-.75.52-.294.133-.62.2-.98.2H.988l-.06-.87h1.04zm-.09-3.23c0 .287.066.493.2.62.14.12.406.18.8.18h.79V3.5c0-.42-.084-.72-.25-.9-.16-.187-.387-.28-.68-.28-.274 0-.487.09-.64.27-.147.173-.22.417-.22.73zm5.124.8c.086 0 .143.037.17.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.084.11-.17.11h-1.65c-.087 0-.144-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.016-.277.05-.35.026-.073.083-.11.17-.11h1.65zm1.65 0c.087 0 .143.037.17.11.033.067.05.173.05.32a.868.868 0 01-.05.34c-.027.073-.083.11-.17.11h-1.65c-.087 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.083-.11.17-.11h1.65zm1.65 0c.087 0 .144.037.17.11.034.067.05.173.05.32a.867.867 0 01-.05.34c-.026.073-.083.11-.17.11h-1.65c-.086 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h1.65zm1.65 0c.087 0 .144.037.17.11.034.067.05.173.05.32a.867.867 0 01-.05.34c-.026.073-.083.11-.17.11h-1.65c-.086 0-.143-.033-.17-.1a.802.802 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h1.65zm.911 0c.24 0 .427-.063.56-.19.14-.127.21-.307.21-.54V2.11h.82v1.32c0 .507-.136.897-.41 1.17-.266.267-.64.4-1.12.4h-.97c-.086 0-.143-.033-.17-.1a.802.802 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h.91zm1.66-3.24h-.91V.04h.91v.84zm-1.34 0h-.91V.04h.91v.84zM5.647 12.77c0 .367-.06.71-.18 1.03-.113.327-.277.61-.49.85-.213.24-.473.427-.78.56-.307.14-.65.21-1.03.21h-.61c-.747 0-1.327-.23-1.74-.69-.413-.46-.62-1.09-.62-1.89v-1.77h.81v1.74c0 .52.13.94.39 1.26.26.32.687.48 1.28.48h.44c.3 0 .557-.047.77-.14.22-.093.4-.22.54-.38s.243-.347.31-.56c.067-.213.1-.437.1-.67v-2.69h.81v2.66zm-2.38-2.85h-.98v-.86h.98v.86zM8.231 13c-.18 0-.353-.023-.52-.07a1.134 1.134 0 01-.44-.26 1.311 1.311 0 01-.29-.47c-.073-.2-.11-.447-.11-.74V6.8h.82v4.48c0 .253.054.457.16.61.114.153.29.23.53.23h.2c.147 0 .22.143.22.43 0 .3-.073.45-.22.45h-.35zm2.003-.88c.087 0 .143.037.17.11a.76.76 0 01.05.32.869.869 0 01-.05.34c-.027.073-.083.11-.17.11h-1.65c-.087 0-.143-.033-.17-.1a.801.801 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.083-.11.17-.11h1.65zm.13 0c.507 0 .76-.213.76-.64v-.31c0-.567.147-1.013.44-1.34.3-.333.714-.5 1.24-.5.274 0 .514.047.72.14.207.087.38.21.52.37s.244.353.31.58c.074.22.11.463.11.73 0 .587-.15 1.043-.45 1.37-.3.32-.713.48-1.24.48a2.03 2.03 0 01-.77-.15 1.165 1.165 0 01-.56-.53c-.06.14-.133.257-.22.35a1.286 1.286 0 01-.27.21c-.093.047-.193.08-.3.1a2.2 2.2 0 01-.29.02h-.13c-.086 0-.143-.033-.17-.1a.8.8 0 01-.05-.32c0-.16.017-.277.05-.35.027-.073.084-.11.17-.11h.13zm3.3-.91c0-.293-.066-.533-.2-.72-.126-.187-.353-.28-.68-.28-.3 0-.523.09-.67.27-.14.18-.21.433-.21.76 0 .293.08.513.24.66.167.147.377.22.63.22.3 0 .524-.077.67-.23.147-.16.22-.387.22-.68z'
                    ></path>
                </svg>
            </div>
            <div className='h-14 px-3'>
                <ReactSlider
                    className='ReactSlider'
                    trackClassName='track'
                    thumbClassName='thumb'
                    max={highestPrice}
                    invert
                    value={[Number(priceRange.min), Number(priceRange.max)]}
                    onChange={value => {
                        setPriceRange({
                            min: value[0].toString(),
                            max: value[1].toString(),
                        })
                    }}
                    minDistance={1}
                    step={1}
                    renderThumb={props => <div {...props}></div>}
                />
                <div className='flex items-center justify-between pt-6 text-xs'>
                    <p>ارزانترین</p>
                    <p>گرانترین</p>
                </div>
            </div>
            <button
                onClick={() => {
                    _FillterPriceHandler(priceRange)
                }}
                className='w-full rounded-b-lg bg-main py-2 text-lightWhite transition-all duration-200 hover:bg-green-700/90'
            >
                اعمال فیلتر
            </button>
        </div>
    )
}
export default PriceFilter
