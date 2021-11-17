import { TEXT } from '../../constants/constants'
import Project from '../../components/Project/Project'
import GinaTells from '../../assets/images/ginatells.png'
import SaveG from '../../assets/images/savegiraffee.png'
import Weat from '../../assets/images/weat1.png'
import FoxAdm from '../../assets/images/foxadmtool.png'
import Kpi from '../../assets/images/kpi.png'

function Projects() {

  return (
    <div>
      <h3>Projects</h3>
      <Project
        title='Gina Tells'
        link='https://github.com/ginatells'
        desc={TEXT.P1}
        img={GinaTells} />

      <Project
        title='Save Giraffe'
        link='https://github.com/brunaPrauchner/AI-AutomatedPlanning-SaveGiraffe'
        desc={TEXT.P2}
        img={SaveG} />

      <Project
        title='Fox Adm Tool'
        link='https://github.com/brunaPrauchner/fox-adm-tool-api'
        desc={TEXT.P4}
        img={FoxAdm} />

      <Project
        title='Check Weather'
        link='https://brunaprauchner.com/progress'
        desc={TEXT.P5}
        img={Weat} />

      <Project
        title='KPI Tracking'
        link='https://brunaprauchner.com/progress'
        desc={TEXT.P7}
        img={Kpi} />
    </div>
  );
}
export default Projects;
