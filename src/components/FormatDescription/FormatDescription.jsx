import './FormatDescription.css'

const FormatDescription = ({ section, title, desc, img, size }) => {
  const style = {}

  switch (size) {
    case 'small':
      style.width = '250px'
      style.height = '250px'
      break;

    case 'medium':
      style.width = '300px'
      style.height = '300px'
      break;

    case 'large':
      style.width = '100px'
      style.height = '100px'
      break;
  }

  return (
    <div className='container-format'>
    <div>
      <h5>{section}</h5>
      {title && <span className='format-name'>{title}</span>}
      <p className='item-desc'>{desc}</p>
      </div>
      <div className='item-img'>
        <img src={img} style={style} />
      </div>
    </div>
  )
}
export default FormatDescription;
