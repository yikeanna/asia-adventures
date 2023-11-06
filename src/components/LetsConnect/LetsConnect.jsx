import React, { useState } from 'react';
import './LetsConnect.css';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ContactUs from '../ContactUs/ContactUs';



export default function LetsConnect() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="lets-connect">
      <div className="title">Let's Connect</div>
      <div className="button-container">
        <ContactUs isOpen={isModalOpen} closeModal={closeModal} name="" />
        <button onClick={openModal} className='button'>Email
          <FaEnvelope className="icon" />
        </button>
        <button onClick={openModal}className='button' >Linkednd
          <FaLinkedin className="icon" />
        </button>

        <button onClick={openModal} className='button'>Instagram
          <FaInstagram className="icon" />
        </button>
      </div>
    </div>
  );
}