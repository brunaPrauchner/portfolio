import { FiExternalLink } from 'react-icons/fi'
import Button from '../../components/Button/Button'
import './Project.css'

const Project = ({ title, link, desc, img }) => {
  return (
    <div className='container-project'>
      <div>
        <h5 className='format-title'>{title}</h5>
        <p className='format-desc'>{desc}</p>
        <Button linkBt={link} desc='Check project' icon={<FiExternalLink />} />
      </div>
      <img src={img} className='format-img' />
    </div>
  )
}
export default Project;
