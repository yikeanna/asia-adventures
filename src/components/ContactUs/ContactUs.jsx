import React, { useState } from 'react';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const contactData = [
    {
      name: 'Person 1',
      role: 'Role 1',
      email: 'person1@example.com',
      linkedin: 'https://www.linkedin.com/in/person1',
      instagram: 'https://www.instagram.com/person1',
      image: 'person1.jpg', // Replace with actual image URL
    },
    // Add more contact data objects as needed
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Contact Us</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {contactData.map((contact, index) => (
              <div key={index} className="contact-entry">
                <img src={contact.image} alt={contact.name} />
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.role}</p>
                  <p>
                    <a href={`mailto:${contact.email}`}>Email</a>
                  </p>
                  <p>
                    <a href={contact.linkedin}>LinkedIn</a>
                  </p>
                  <p>
                    <a href={contact.instagram}>Instagram</a>
                  </p>
                </div>
              </div>
            ))}
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
