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
      <h5>My Story</h5>
      <FormatDescription desc={TEXT.AB1} img={Bru} size='medium' />

      <h5>Tech Skills</h5>
      <p className='container-middle'>
        Here are a few technologies I've been working with recently:
      </p>
      <div className='container-box'>
        <Box firstLine='C#' secondLine='.NetCore' />
        <Box firstLine='React JS' />
        <Box firstLine='RabbitMq' secondLine='PCF' thirdLine='GIT' />

      </div>
      <h5>Community Involvement</h5>
      <FormatDescription title='Toastmaster' desc={TEXT.CI1} img={Tm} size='small' />
      <FormatDescription title='Study Group' desc={TEXT.CI2} img={Biti} size='small' />
      <FormatDescription title='NGO Doutorzinhos' desc={TEXT.CI3} img={Dout} size='small' />
    </>
  )
}
export default About
