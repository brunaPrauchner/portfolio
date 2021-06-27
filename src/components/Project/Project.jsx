import './Project.css';

const Project = ({ title, desc, img }) => {
  return (
    <div className='container-project'>
      <div>
        <h5 className='format-title'>{title}</h5>
        <p className='format-desc'>{desc}</p>
      </div>
      <img src={img} className='format-img' />
    </div>
  )
}
export default Project;
