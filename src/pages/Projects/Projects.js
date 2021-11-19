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
        img={GinaTells} 
        caption='Gina Tells Logo'
        />

      <Project
        title='Save Giraffe'
        link='https://github.com/brunaPrauchner/AI-AutomatedPlanning-SaveGiraffe'
        desc={TEXT.P2}
        img={SaveG} 
        caption='Project Image for Save Giraffe'
        />

      <Project
        title='Fox Adm Tool'
        link='https://github.com/brunaPrauchner/fox-adm-tool-api'
        desc={TEXT.P4}
        img={FoxAdm} 
        caption='Project Image for Fox Adm Tool'
        />

      <Project
        title='Check Weather'
        link=''
        desc={TEXT.P5}
        img={Weat} 
        caption='Project Image for Check Weather'
        />

      <Project
        title='KPI Tracking'
        link = ''
        desc={TEXT.P7}
        img={Kpi} 
        caption='Project Image for KPI Tracking'
        />
    </div>
  );
}
export default Projects;
