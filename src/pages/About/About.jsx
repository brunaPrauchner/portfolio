import { TEXT } from '../../constants/constants'
import Bru from '../../assets/images/bru3.png'
import Tm from '../../assets/images/tm.png'
import Biti from '../../assets/images/biti.png'
import Dout from '../../assets/images/douttt.png'
import FormatDescription from '../../components/FormatDescription/FormatDescription'
import Box from '../../components/Box/Box'
import './About.css'

function About() {
  return (
    <>
      <h3>About Me</h3>
      <FormatDescription section='My Story' desc={TEXT.AB1} img={Bru} size='medium' />

      <div className='container-middle'>
        <h5>Tech Skills</h5>
        <span className='desc-tech'>Here are a few technologies I've been working with recently:</span>

        <div className='container-box'>
          <Box firstLine='C#' secondLine='.NetCore' thirdLine='xUnit' />
          <Box firstLine='JavaScript' secondLine='React' thirdLine='Jest' />
          <Box firstLine='RabbitMQ' secondLine='PCF' thirdLine='GIT' />
        </div>
      </div>

      <FormatDescription section='Community Involvement' title='Toastmaster' desc={TEXT.CI1} img={Tm} size='small' />
      <FormatDescription title='Study Group' desc={TEXT.CI2} img={Biti} size='small' />
      <FormatDescription title='NGO Doutorzinhos' desc={TEXT.CI3} img={Dout} size='small' />
    </>
  )
}
export default About
