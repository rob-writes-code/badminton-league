import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../UserContext';


const LandingPage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to={'register'}>Register User</Link>
        </div>
    )
}

export default LandingPage