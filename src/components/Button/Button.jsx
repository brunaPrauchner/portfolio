import './Button.css'
import { HashLink } from 'react-router-hash-link'

const Button = ({ linkBt, desc, icon }) => {
  return (
    <>
      {
        linkBt ?
          <button className='format-bt' onClick={() => window.open(linkBt, '_blank')}>
            <span>{desc} {icon}</span>
          </button>
          : <HashLink to='/progress'>
            <button className='format-bt'>
              <span>{desc} {icon}</span>
            </button>
          </HashLink>
      }
    </>
  )
}
export default Button;
