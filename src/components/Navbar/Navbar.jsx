import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import MenuListComposition from '../MenuListComposition/MenuListComposition'
import LogoFox from '../../assets/images/rounded-logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar' role='navigation'>
      <div className='left-side'>
        <div className='menu-config'>
          <MenuListComposition />
        </div>
        <Link style={{ display: 'flex' }} to='/portfolio'>
          <img className='img-logo' src={LogoFox} alt='home' />
        </Link>
      </div>
      <ul className='right-side'>
        <li> <HashLink to='about'>About</HashLink></li>
        <li> <HashLink to='projects'>Projects</HashLink></li>
        <li> <HashLink to='contact'>Contact</HashLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;
