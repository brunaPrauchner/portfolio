import './FormatSkill.css'
import { BiRightArrow } from "react-icons/bi"

const FormatSkill = () => {
  return (
    <div className='container-skills'>
      <div>
        <BiRightArrow className='icon' />
        <span>C# .NetCore xUnit</span>
      </div>
      <div>
        <BiRightArrow className='icon' />
        <span>JavaScript React.js Jest</span>
      </div>
      <div>
        <BiRightArrow className='icon' />
        <span>RabbitMQ SQL PCF GIT</span>
      </div>
    </div>
  )
}
export default FormatSkill;
