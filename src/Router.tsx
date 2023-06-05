import { RouteObject, useRoutes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Categories from "./Pages/Categories/Categories"
import Course from "./Pages/Course/Course"
import InstructorPage from "./Pages/Instructor/InstructorPage"
import Basket from "./Pages/Basket/Basket"
import UserCourses from "./Pages/UserCourses/UserCourses"
import UseSearch from "./Pages/UseSearch/UseSearch"

const InitRoutes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/categories/:Category_Name/:PageNumber?", element: <Categories /> },
    { path: "/:Category_Name/:Course_Name", element: <Course /> },
    { path: "/instructors/:Instructor_Name", element: <InstructorPage /> },
    { path: "/user/basket", element: <Basket /> },
    { path: "/user/courses", element: <UserCourses /> },
    { path: "/search", element: <UseSearch /> },
]

const Router = () => useRoutes(InitRoutes)

export default Router
