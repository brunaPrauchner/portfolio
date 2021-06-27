import { TEXT } from '../../constants/constants'
import Project from '../../components/Project/Project';
import './Projects.css'

function Projects() {
  return (
    <div>
     <h3 className='title-proj'>Projects</h3>
      <ul>
        <Project title={'Gina Tells'} desc={TEXT.P1} img='images/gina1c.png' />
        <Project title={'Save Giraffe'} desc={TEXT.P2} img='images/gira1.png' />
        <Project title={'Check Weather'} desc={TEXT.P3} img='images/weat1.png' />
      </ul>
    </div>
  );
}
export default Projects;
