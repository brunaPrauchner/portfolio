import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { RiCodeBoxFill } from "react-icons/ri"
import './Contact.css'

function Contact() {
  return (
    <div className='contact-flex'>
      <h3>Let's get in touch</h3>
      <div className='container-top'>
        <p >
          If you wanna get in touch, have a question
          or simply have a chat drop me an email
          at </p>
        <span className='format-email'>prauchner.bruna@gmail.com </span>
        <p>
          or reach me in one of these social media.
        </p>
      </div>

      <ul className='contact-list'>
        <li ><AiFillGithub className='icon' /><a href='https://github.com/brunaPrauchner' target="_blank">brunaPrauchner </a></li>
        <li><AiFillLinkedin className='icon' /> <a href='https://www.linkedin.com/in/bruna-prauchner/' target="_blank">bruna-prauchner </a></li>
        <li><RiCodeBoxFill className='icon' /><a href='https://leetcode.com/BrunaPrauchner23/' target="_blank">BrunaPrauchner23 </a></li>
      </ul>
    </div>
  );
}
export default Contact
