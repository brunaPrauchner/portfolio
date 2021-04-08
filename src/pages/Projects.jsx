import React from "react";
import { TEXT } from '../constants/constants'
import Project from '../components/Project';
import LogoG from './gina1c.png';
import LogoS from './weat1.png';
import LogoGF from './gira1.png';
import './Projects.css'

function Projects() {
  return (
    <div>
     <h3 className='title-proj'>Projects</h3>
      <ul>
        <Project title={'Gina Tells'} desc={TEXT.P1} img={LogoG} />
        <Project title={'Save Giraffe'} desc={TEXT.P2} img={LogoGF} />
        <Project title={'Check Weather'} desc={TEXT.P3} img={LogoS} />
      </ul>
    </div>
  );
}

export default Projects;