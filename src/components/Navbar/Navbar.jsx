import { Link } from 'react-router-dom'
import MenuListComposition from '../MenuListComposition/MenuListComposition'
import LogoFox from '../../assets/images/logo-redondo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar' role='navigation'>
      <div className='left-side'>
        <div className='menu-config'>
          <MenuListComposition />
        </div>
        <Link to='/portfolio'>
          <img className='img-logo' src={LogoFox} alt='home' />
        </Link>
      </div>
      <ul className='right-side'>
        <li> <Link to='about'>About</Link></li>
        <li> <Link to='projects'>Projects</Link></li>
        <li> <Link to='contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
