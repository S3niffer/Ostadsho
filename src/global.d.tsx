import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { store } from "./App/Store";

declare global {

    type Theme = "DARK" | "LIGHT"

    type Tnavbar = { id: number, title: string, link: string, ulColsThree?: true }
    type TSubmenuItem = TnavbarItem[]
    type TnavbarItem = Tnavbar & { submenu?: TSubmenuItem }

    type CategoryItemProps = {
        id: number;
        icon: IconDefinition;
        title: string;
        courseCount: number
    }

    type CourseCardT = {
        id: number;
        title: string;
        price: number;
        BeforeDiscount?: number;
        imageSrc: string;
        hrefLink: string
    }

    type commentT = {
        id: number,
        name: string,
        imgSrc: string,
        comment: string
    }

    type contactInfo = {
        id: number,
        icon: IconDefinition,
        info: string
    }

    // Store _ Redux
    type RootState = ReturnType<typeof store.getState>
}

export { };