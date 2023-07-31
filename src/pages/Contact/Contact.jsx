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
          Hi and thanks for stopping by!
        </p>
        <p>
          Don’t be shy and get in touch with me,
          have a question or simply have a chat
          drop me an email at
        </p>
        <span className='format-email'>prauchner.bruna@gmail.com </span>
        <p>
          or reach me in one of these social media.
        </p>
      </div>

      <ul className='contact-list'>
        <li ><AiFillGithub className='icon' /><a href='https://github.com/brunaPrauchner' target="_blank" rel="noopener noreferrer">brunaPrauchner </a></li>
        <li><AiFillLinkedin className='icon' /> <a href='https://www.linkedin.com/in/brunaprauchner/' target="_blank" rel="noopener noreferrer">brunaPrauchner </a></li>
        <li><RiCodeBoxFill className='icon' /><a href='https://leetcode.com/BrunaPrauchner23/' target="_blank" rel="noopener noreferrer">BrunaPrauchner23 </a></li>
      </ul>
    </div>
  );
}
export default Contact
