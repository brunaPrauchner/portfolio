import './Project.css';

const Project = ({ title, desc, img }) => {

  return (
    <>
    <h5>{title}</h5>
    <div className='container-project'>
      <p className='format-desc'>{desc}</p>
      <img src={img} className='format-img'/>
    </div>
    </>
  )
}

export default Project;