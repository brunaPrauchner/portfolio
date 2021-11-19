import './FormatDescription.css'

const FormatDescription = ({ section, title, desc, img, size, customComponent, caption }) => {
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
      style.width = '400px'
      style.height = '400px'
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
        {img ? <img src={img} alt={caption} style={style} /> : customComponent}
      </div>
    </div>
  )
}
export default FormatDescription;
