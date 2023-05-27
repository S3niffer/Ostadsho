import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { makeMenubarHidden } from "../App/Slices/MenubarVisibility";

const UseScrollandMenubarReset = () => {

    const location = useLocation()
    const Dispatch = useDispatch()

    useEffect(() => {
        (document.querySelector('.App') as HTMLDivElement).scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Dispatch(makeMenubarHidden())
    }, [location.pathname])

    return null;
}
export default UseScrollandMenubarReset