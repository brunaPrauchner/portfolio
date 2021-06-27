import { TEXT } from '../../constants/constants';
import Project from '../../components/Project/Project';
import GinaTells from '../../assets/images/gina1c.png';
import SaveG from '../../assets/images/gira1.png';
import Weat from '../../assets/images/weat1.png';
import './Projects.css';

function Projects() {
  return (
    <div>
     <h3 className='title-proj'>Projects</h3>
      <ul>
        <Project title='Gina Tells' desc={TEXT.P1} img={GinaTells} />
        <Project title='Save Giraffe' desc={TEXT.P2} img={SaveG} />
        <Project title='Check Weather' desc={TEXT.P3} img={Weat} />
      </ul>
    </div>
  );
}
export default Projects;
