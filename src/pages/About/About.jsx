import { TEXT } from '../../constants/constants'
import Bru from '../../assets/images/bru3.png'
import Tm from '../../assets/images/tm.png'
import Biti from '../../assets/images/biti.png'
import Dout from '../../assets/images/douttt.png'
import CommInvProject from '../../components/CommInvProject/CommInvProject'
import './About.css'

function About() {
  return (
    <>
      <h3 className="format-h3">
        About Me
      </h3>
      <div className="container-top">
        <p className="itemtop">
          {TEXT.ABT1}<br />
          {TEXT.ABT2}<br />
          {TEXT.ABT3}<br />
          {TEXT.ABT4}<br />
          {TEXT.ABT5}<br />
          {TEXT.ABT6}
        </p>
        <img src={Bru} className='format-img' />
      </div>
      <h5 className="container-middle">Tech Skills</h5>
      <h5 className="format-h5">Community Involvement</h5>
      <CommInvProject desc={TEXT.CI1} img={Tm} />
      <CommInvProject desc={TEXT.CI2} img={Biti} />
      <CommInvProject desc={TEXT.CI3} img={Dout} />
    </>
  );
}
export default About;