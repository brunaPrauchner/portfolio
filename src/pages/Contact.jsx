import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import './Contact.css'

function Contact() {
  return (
    <div className="contact-flex">
      <div className="containertop">
        <h3>Let's get in touch</h3>
        <p>
          Need anything built, want to work together or simply want to have a chat?
          Drop me an e-mail at jordy@kaiwa-projects.com or reach me in one of these social media.
        </p>
      </div>

      <ul className="linkslist">
        <li><AiFillGithub className="icon" /><a href="https://www.w3schools.com" target="_blank"> brunaPrauchner23 </a></li>
        <li><AiFillLinkedin className="icon" /> <a href="https://www.w3schools.com" target="_blank">bruna-prauchner </a></li>
        <li><RiCodeBoxFill className="icon" /><a href="https://www.w3schools.com" target="_blank"> BrunaPrauchner23 </a></li>
      </ul>
    </div>
  );
}
export default Contact;