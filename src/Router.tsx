import { RouteObject, useRoutes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Categories from "./Pages/Categories/Categories"
import Course from "./Pages/Course/Course"
import InstructorPage from "./Pages/Instructor/InstructorPage"

const InitRoutes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/categories/:Category_Name/:PageNumber?", element: <Categories /> },
    { path: "/:Category_Name/:Course_Name", element: <Course /> },
    { path: "/instructors/:Instructor_Name", element: <InstructorPage /> },
]

const Router = () => useRoutes(InitRoutes)

export default Router
