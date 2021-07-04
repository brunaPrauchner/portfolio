import { TEXT } from '../../constants/constants'
import Project from '../../components/Project/Project'
import GinaTells from '../../assets/images/gina1c.png'
import SaveG from '../../assets/images/gira1.png'
import Weat from '../../assets/images/weat1.png'

function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <Project title='Gina Tells' link='https://www.w3schools.com' desc={TEXT.P1} img={GinaTells} />
      <Project title='Save Giraffe' link='https://github.com/brunaPrauchner/AI-AutomatedPlanning-SaveGiraffe' desc={TEXT.P2} img={SaveG} />
      <Project title='Find your GIPHY' link='https://www.w3schools.com' desc={TEXT.P3} img={Weat} />
      <Project title='Fox Adm Tool' link='https://github.com/brunaPrauchner/fox-adm-tool-api' desc={TEXT.P3} img={Weat} />
      <Project title='Check Weather' link='https://www.w3schools.com' desc={TEXT.P3} img={Weat} />
      <Project title='KPI Tracking' link='https://www.w3schools.com' desc={TEXT.P3} img={Weat} />
    </div>
  );
}
export default Projects;
