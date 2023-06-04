import { createSelector, createSlice } from "@reduxjs/toolkit"
import SaeediRad from "../../Assets/instructorsAvatar/mohammdAminSaeediRad.jpg"
import madeany from "../../Assets/instructorsAvatar/iman-madaeny.jpeg"
import mirmirani from "../../Assets/instructorsAvatar/jadi.jpg"

export const initialState: T_Instructor[] = [
    {
        id: 0,
        name: "محمدامین سعیدی راد",
        avatarSrc: SaeediRad,
        desc: `
محمدامین سعیدی راد 21 ساله، دانشجوی رشته مهندسی کامپیوتر
مدرس دوره های مجازی و حضوری طراحی و برنامه نویسی وب
تجربه های کاری : مدرس دوره های طراحی وب در تسنیم-دانشگاه سراسری بجنورد- ۱۳۹۵ الی ۱۳۹۹
    `,
        instructorName: "saeedirad",
    },
    {
        id: 1,
        name: "ایمان مدائنی",
        avatarSrc: madeany,
        desc: `
    ایمان مدائنی مدرس بین المللی و رسمی مایکروسافت ، مدیر و موسس انجمن برنامه نویسان و آموزشگاه برنامه نویسان , سایت آموزش آنلاین تاپ لرن , گروه برنامه نویسان پایدار و مجموعه تحقیقاتی برنامه نویسان پیشرو پایدار.
    از سال 1394 تا کنون مدرس بیش از 1200 دانشجو بصورت حضوری ، 800 دانشجو بصورت غیر حضوری و مشاور چندین سازمان و ارگان دولتی و شرکت های خصوصی بوده
    `,
        instructorName: "madaeny",
    },
    {
        id: 2,
        name: "امیرعماد میرمیرانی",
        avatarSrc: mirmirani,
        desc: `
    امیرعماد میرمیرانی که با نام مستعار جادی شناخته می‌شود، برنامه‌نویس و فعال حوزهٔ تکنولوژی‌های جدید و جامعهٔ نرم‌افزار آزاد و متن‌باز اهل ایران است. او مجری پادکستی با عنوان «رادیو گیک» است.
    جادی از زمان آغاز وبلاگ‌ها در ایران با وبلاگ «جادی» مطرح شد؛ وبلاگی که بخشی از اهدافش آگاهی‌رسانی در مورد امنیت و حقوق دیجیتال و همچنین دسترسی به ابزارهای جدید حوزه کامپیوتر و اینترنت بود.
    `,
        instructorName: "mirmirani",
    },
]

const InstructorsSlice = createSlice({
    name: "instructors",
    initialState,
    reducers: {},
})

export const getAllInstructors = (state: RootState) => state.instructors

export const getInstructor = createSelector([getAllInstructors, (state: RootState, Name: string) => Name], (instructors, Name) =>
    instructors.slice().find(({ instructorName }) => instructorName === Name)
)

export default InstructorsSlice.reducer
