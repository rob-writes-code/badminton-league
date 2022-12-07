import { Link } from "react-router-dom";
import RegisterPage from "../RegisterPage/RegisterPage";

const LandingPage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to={'register'}>Register User</Link>
        </div>
    )
}

export default LandingPage