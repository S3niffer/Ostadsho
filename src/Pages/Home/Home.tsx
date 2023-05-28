import CategorySection from "../../Layouts/CategorySection/CategorySection"
import CommentSection from "../../Layouts/CommentSection/CommentSection"
import CoursesSection from "../../Layouts/CoursesSection/CoursesSection"
import Footer from "../../Layouts/Footer/Footer"
import Header from "../../Layouts/Header/Header"
import HeroSection from "../../Layouts/HeroSection/HeroSection"
import BlackTopFooter from "../../components/BlackTopFooter/BlackTopFooter"

const Home = () => {
    return (
        <div className='Home'>
            <Header shadow />
            <HeroSection />
            <CategorySection />
            <CoursesSection />
            <CommentSection />
            <Footer>
                <BlackTopFooter />
            </Footer>
        </div>
    )
}
export default Home
