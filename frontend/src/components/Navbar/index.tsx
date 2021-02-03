import './style.css';
import logo from '../../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar__wrapper">
            <a href="#" className="navbar__logo" target="_new"><img src={logo} alt="Logo DS Deliver"/></a>
        </nav>
    );
}

export default Navbar;