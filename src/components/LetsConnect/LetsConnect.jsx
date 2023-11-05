import React from 'react';
import './LetsConnect.css';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ContactUs from '../ContactUs/ContactUs';



export default function LetsConnect() {
  return (
    <div className="lets-connect">
      <div className="title">Let's Connect</div>
      <div className="button-container">
      
        <a href="mailto:anna.zhang@mail.mcgill.ca, " className="button">
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/" className="button">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/yikeanna/" className="button">
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}