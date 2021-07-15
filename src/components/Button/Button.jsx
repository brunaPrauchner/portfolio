import './Button.css'

const Button = ({ linkBt, desc, icon }) => {
  return (
    <button className='format-bt' onClick={() => window.open(linkBt, '_blank')}>
      <span>{ desc } {icon}</span>
    </button>
  )
}
export default Button;
