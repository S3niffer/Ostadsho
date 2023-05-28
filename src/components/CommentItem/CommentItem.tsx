const CommentItem = (props: T_Comment) => {
    return (
        <div className='relative border bg-lightWhite p-4 ps-14 pt-2 dark:border-darkThirdBlack dark:bg-darkFourthBlack xl:ps-16'>
            <img
                src={props.imgSrc}
                className='absolute -right-4 -top-7 aspect-square w-14 rounded-full blur-[2px] lg:w-16 xl:w-[4.5rem]'
                alt='user-avatar'
            />
            <p className='font-danafaBold text-Gray dark:text-lightWhite xl:text-lg'>{props.name}</p>
            <span className='text-darkseventhGray text-lg dark:text-SecondaryGray'>{props.comment}</span>
        </div>
    )
}
export default CommentItem
