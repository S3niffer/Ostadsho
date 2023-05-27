import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCourse } from "../../App/Slices/Courses"

const Course = () => {
    const { Category_Name, Course_Name } = useParams()
    const Course = useSelector((state: RootState) =>
        getCourse(state, Category_Name!, Course_Name!)
    )

    // use Conditional Rendering to prevent the question mark
    return <div>{Course?.courseName}</div>
}
export default Course
