import { Link } from 'react-router-dom';
import MenuListComposition from '../MenuListComposition/MenuListComposition';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar' role='navigation'>
      <div className='leftside'>
        <MenuListComposition />
        <Link to='/portifolio'>
          <img className='img-logo' src='images/logo-redondo.png' alt='home' />
        </Link>
      </div>
      <ul className='rightside'>
        <li> <Link to='about'>About</Link></li>
        <li> <Link to='projects'>Projects</Link></li>
        <li> <Link to='contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
