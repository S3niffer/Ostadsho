import { RouteObject, useRoutes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Categories from "./Pages/Categories/Categories"
import Course from "./Pages/Course/Course"

const InitRoutes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/Categories/:Category_Name", element: <Categories /> },
    { path: "/:Category_Name/:Course_Name", element: <Course /> },
]

const Router = () => useRoutes(InitRoutes)

export default Router
