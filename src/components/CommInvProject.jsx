import './CommInvProject.css';

const CommInvProject = ({ desc, img }) => {

  return (
    <div className='container-bottom'>
      <p className='itembottom'>{desc}</p>
      <img src={img} className='img-comm' />
    </div>
  )
}
export default CommInvProject;