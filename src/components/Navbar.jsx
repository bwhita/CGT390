import styles from '../styles/navbar.module.css';

const Navbar = ({ mode, updateMode }) => {
    return(
        <nav className = "navbar selection">
            <ul>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#">About</a>
                </li>
                <li>
                    <a href = "#">Profiles</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;