import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../UserContext';


const LandingPage = () => {
    const hello = useContext(UserContext)
    console.log(hello)

    return (
        <div>
            <h1>Home Page</h1>
            <Link to={'register'}>Register User</Link>
            <Link to={'login'}>Login</Link>
        </div>
    )
}

export default LandingPage