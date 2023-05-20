const CommentItem = (props: commentT) => {
    return (
        <div className="bg-lightWhite dark:bg-darkFourthBlack p-4 pt-2 ps-14 xl:ps-16 border dark:border-darkThirdBlack relative">
            <img src={props.imgSrc} className="w-14 lg:w-16 xl:w-[4.5rem] aspect-square absolute rounded-full -top-7 -right-4 blur-[2px]" alt="user-avatar" />
            <p className="text-Gray dark:text-lightWhite font-danafaBold xl:text-lg">{props.name}</p>
            <span className="text-darkseventhGray dark:text-SecondaryGray text-lg">
                {props.comment}
            </span>
        </div>
    )
}
export default CommentItem