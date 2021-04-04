import React from "react";
import { TEXT } from '../constants/constants'
import Table from '../components/Table';
import { Link, Outlet, useLocation } from "react-router-dom";
import './About.css'
function About() {
  return (
    <div className="container-about">
      <h3 className="container-top">About Me</h3>
      <p className="itemtop">
        {TEXT.ABT1}
      </p>
      <p className="itemtop">
        {TEXT.ABT2}
      </p>
      <p className="itemtop">
        {TEXT.ABT3}
      </p>
      <h5 className="container-middle">Tech Skills</h5>
      <Table />

      <h5 className="container-bottom">Community Involvement</h5>
      <p className="itembottom">
        {TEXT.CI1}
      </p>
      <p className="itembottom">
        {TEXT.CI2}
      </p>
      <p className="itembottom">
        {TEXT.CI3}
      </p>
    </div>
  );
}
export default About;