import React from "react";
import { TEXT } from '../constants/constants'
import Table from '../components/Table';
import CommInvProject from '../components/CommInvProject'
import Tm from './tm.png';
import Biti from './biti.png';
import Dout from './douttt.png';
import Bru1 from './bru1.png';
import Bru2 from './bru2.png';
import Bru3 from './bru3.png';
import Bru4 from './bru4.png';
import { Link, Outlet, useLocation } from "react-router-dom";
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
          {TEXT.ABT5}
        </p>
        <img src={Bru4} className='format-img' />
      </div>

      <h5 className="container-middle">Tech Skills</h5>
      <Table />

      <h5 className="format-h5">Community Involvement</h5>
      <CommInvProject desc={TEXT.CI1} img={Tm} />
      <CommInvProject desc={TEXT.CI2} img={Biti} />
      <CommInvProject desc={TEXT.CI3} img={Dout} />
    </>
  );
}
export default About;