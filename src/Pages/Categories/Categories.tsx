import BreadCrumb from "../../Layouts/BreadCrumb/BreadCrumb"
import CoursesSectionWithFiltering from "../../Layouts/CoursesSectionWithFiltering/CoursesSectionWithFiltering"
import Footer from "../../Layouts/Footer/Footer"
import Header from "../../Layouts/Header/Header"
import GreenTopFooter from "../../components/GreenTopFooter/GreenTopFooter"

const Categories = () => {
    return (
        <div className='Categories'>
            <Header />
            <BreadCrumb />
            <CoursesSectionWithFiltering />
            <Footer dynamicDepart='E_NAMAD'>
                <GreenTopFooter />
            </Footer>
        </div>
    )
}
export default Categories
