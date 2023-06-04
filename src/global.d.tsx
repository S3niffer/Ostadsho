import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { store } from "./App/Store"
import { ReactNode } from "react"

declare global {
    type T_Theme = "DARK" | "LIGHT"

    interface T_NavbarItem {
        id: number
        title: string
        twoColumn?: true
        submenu: T_NavbarSubmenu[]
        lasindex?: true
    }
    type T_NavbarSubmenu = Omit<T_NavbarItem, "submenu"> & { link: string }

    interface T_CategoryItem {
        id: number
        title: string
        icon: IconDefinition
        categoryName: string
        courses: T_Course[]
    }

    interface T_Course {
        id: number
        title: string
        price: number
        imageSrc: string
        courseName: string
        categoryName: string
        chapters: T_chapter[]
        comments?: T_Comment[]
        discountPercent?: number
        instructorName?: "madaeny" | "saeedirad" | "mirmirani"
    }

    interface T_chapter {
        id: number
        name: string
        episodes: T_Episode[]
    }

    interface T_Episode {
        id: number
        title: string
        link: string
    }

    interface T_Comment {
        id: number
        name: string
        imgSrc: string
        comment: string
        time?: Date
    }

    interface T_Instructor {
        id: number
        name: string
        avatarSrc: string
        desc: string
        instructorName: string
    }

    interface T_ContactInfo {
        id: number
        icon: IconDefinition
        info: string
    }

    interface T_BreadCrumb {
        id: number
        title: string
        href: string
    }

    interface T_SideBarBox {
        title: string
        children: ReactNode
        sticky?: true
    }

    interface T_Footer {
        children: React.ReactNode
        dynamicDepart?: "E_NAMAD"
    }

    interface T_PriceRange {
        min: string
        max: string
    }

    // categoryPageReducer initialState
    interface T_InitialState {
        priceRange: T_PriceRange
        paginationDetails: {
            itemsCount: number
            lastIndex: number
            status: boolean
        }
        sortOrder: T_SortOption
        categoryCourses: T_Course[]
    }

    type T_InitialStater = (courses: T_Course[], PageNumber: number) => T_InitialState

    type T_Reducer = (state: T_InitialState, action: T_Dispatch) => T_InitialState

    type T_Dispatch =
        | { type: "SET_PriceRange"; payload: T_PriceRange }
        | { type: "SET_SortOption"; payload: T_SortOption }
        | { type: "SET_LastIndex"; payload: number }
        | { type: "UPDATE_PaginateStatus"; payload: boolean }
        | { type: "UPDATE_CategoryCourses"; payload: T_Course[] }
        | { type: "RESET_Pagination" }

    interface T_PriceFillter {
        Dispatch: React.Dispatch<T_Dispatch>
        highestPrice: number
    }

    interface T_SortSectionProp {
        Dispatch: React.Dispatch<T_Dispatch>
        paginate: boolean
        sortOrder: T_SortOption
    }
    type T_SortOption = "Cheap" | "Expensive" | "noOrder"

    interface T_PaginationProps {
        items: object[]
        itemsCount: number
        Dispatch: React.Dispatch<T_Dispatch>
    }

    // Store _ Redux
    type RootState = ReturnType<typeof store.getState>
}

// export { };
