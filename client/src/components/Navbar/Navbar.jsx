import { useContext } from "react";
import UserContext from "../../UserContext";

const Navbar = () => {
    const { user } = useContext(UserContext)

    return (
        <nav>Hey there Mister {user.username}</nav>
    )
}
export default Navbar