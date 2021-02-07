import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar__wrapper">
            <Link to="/" className="navbar__logo">
                <img src={logo} alt="Logo DS Deliver" />
            </Link>
        </nav>
    );
};

export default Navbar;