import SearchInput from "../../components/SearchInput/SearchInput"

const BreadCrumb = () => {
    return (
        <div className="BreadCrumb">
            <div className="container py-10 px-4 md:px-0 text-lightWhite flex flex-col lg:flex-row justify-between lg:items-center">
                <div>
                    <h3 className="font-danafaBold text-2xl">
                        تمامی محصولات سایت
                    </h3>
                    <div className="mt-3 mb-5 lg:text-lg">
                        {"خانه > برنامه نویسی"}
                    </div>
                </div>
                <div className="flex-grow-[0.22] xl:text-lg">
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb