import { TEXT } from '../../constants/constants'
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
        <img src='images/bru3.png' className='format-img' />
      </div>
      <h5 className="container-middle">Tech Skills</h5>
      <h5 className="format-h5">Community Involvement</h5>
      <CommInvProject desc={TEXT.CI1} img='images/tm.png' />
      <CommInvProject desc={TEXT.CI2} img='images/biti.png' />
      <CommInvProject desc={TEXT.CI3} img='images/douttt.png' />
    </>
  );
}
export default About;