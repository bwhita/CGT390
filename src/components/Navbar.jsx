import styles from '../styles/navbar.module.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useMode } from "../contexts/ModeContext";

const Navbar = () => {
    const { mode, togglemode } = useMode();
    const { isLogin, logout } = useContext(AuthContext);
    return(
        <nav className = {`${styles["navbar"]}`}>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>                
                <li>
                    <Link to = "/about">About</Link>
                </li>

                {
                isLogin &&
                <li>
                    <Link to = "/add-profile">Add Profile</Link>
                </li>}

            </ul>
            {
                isLogin ?
                <button onClick={logout}>Logout</button>
                :
                <ul>
                    <li><Link to = "/register" >Register</Link></li>
                    <li><Link to = "/login" >Login</Link></li>
                </ul>

            }
            <button onClick = {togglemode}>
                {mode === "light" ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    )
}

export default Navbar;