import React from 'react';
import './ContactUs.css';
import contacts from './../../data/contacts.json';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { FaTimes } from 'react-icons/fa';

const ContactUs = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  const handleModalClick = (event) => {
    // Prevent closing the modal when clicking inside the modal content.
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>

      <div className="modal-content" onClick={handleModalClick}>
        <div className='title-container'>

          <button onClick={closeModal} className='close-button'><FaTimes /></button>
          <h1 className='contact-us'>Contact Us!</h1>

        </div>


        <div className='infos'>

          {contacts.map(contact => (
            <div key={contact.name} className="contact-info">
              <img src={contact.image} alt={contact.name} className='contact-img' />
              <h2 className='contact-name'>{contact.name}</h2>
              <h3 className='contact-role'>{contact.role}</h3>
              <div className='contact-links'>

                <a href={contact.email} className='contact-link'>
                  <FaEnvelope />
                  {/* <span>Email</span> */}
                </a>
                <a href={contact.linkednd} className='contact-link'>
                  <FaLinkedin />
                  {/* <span>LinkedIn</span> */}
                </a>
                <a href={contact.instagram} className='contact-link'>
                  <FaInstagram />
                  {/* <span>Instagram</span> */}
                </a>
              </div>

              <p className='contact-description'>{contact.description}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default ContactUs;
