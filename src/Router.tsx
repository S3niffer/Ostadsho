import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'

const InitRoutes = [
    { path: '/', element: <Home /> },
    { path: '/Categories/:Category_Name', element: <Categories /> },
]







const Router = () => useRoutes(InitRoutes)

export default Router