import './Navbar.css';
import LogoFox from './logo-redondo.png';
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <div className="leftside">
      <Link to="/"><img className="img-logo" src={LogoFox} alt="home" /></Link>
      </div>
      <ul className="rightside">
      <li> <Link to="about" >About</Link></li>
      <li> <Link to="projects">Projects</Link></li>
      <li> <Link to="contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;