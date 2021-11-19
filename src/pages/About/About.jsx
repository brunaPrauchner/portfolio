import { TEXT } from '../../constants/constants'
import Bru from '../../assets/images/bru-mystory.png'
import Tm from '../../assets/images/tm.png'
import Biti from '../../assets/images/biti.png'
import Dout from '../../assets/images/dout.png'
import FormatDescription from '../../components/FormatDescription/FormatDescription'
import FormatSkill from '../../components/FormatSkill/FormatSkill'
import './About.css'

function About() {
  return (
    <>
      <h3>About Me</h3>

      <FormatDescription
        section='My Story'
        desc={TEXT.AB1}
        img={Bru}
        size='medium'
        caption='Bruna Prauchner'
      />

      <FormatDescription
        section='Tech Skills'
        desc={TEXT.TS1}
        customComponent={<FormatSkill />}
        size='medium'
      />

      <FormatDescription
        section='Community Involvement'
        title='Toastmaster'
        desc={TEXT.CI1}
        img={Tm}
        size='small'
        caption='Toastmaster Logo'
      />

      <FormatDescription
        title='Study Group'
        desc={TEXT.CI2}
        img={Biti}
        size='small'
        caption='Study Group Logo'
      />

      <FormatDescription
        title='NGO Doutorzinhos'
        desc={TEXT.CI3}
        img={Dout}
        size='small'
        caption='Doutorzinhos Logo'
      />
    </>
  )
}
export default About
