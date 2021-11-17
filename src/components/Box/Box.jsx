import { BsTools } from 'react-icons/bs'
import './Box.css'

const Box = ({ firstLine, secondLine, thirdLine }) => {
  return (
    <> 
      <div className='format-box'>
        <span className='format-icon'><BsTools /></span>
        <div >
          <div className='format-line'>{firstLine}</div>
          <div className='format-line'>{secondLine}</div>
          <div className='format-line'>{thirdLine}</div>
        </div>
      </div>
    </>
  )
}
export default Box
