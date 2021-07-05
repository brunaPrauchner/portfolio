import './FormatDescription.css'

const FormatDescription = ({ desc, img, size }) => {
  const style = {}

  switch (size) {
    case 'small':
      style.width = '200px'
      style.height = '200px'
      break;

    case 'medium':
      style.width = '350px'
      style.height = '350px'
      break;

    case 'large':
      style.width = '100px'
      style.height = '100px'
      break;
  }

  return (
    <div className='container-format'>
      <p className='item-desc'>{desc}</p>
      <div className='item-img'>
        <img src={img} style={style} />
      </div>
    </div>
  )
}
export default FormatDescription;
