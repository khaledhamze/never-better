import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsApp.css';

const WhatsApp = () => {
  // Byt ut numret nedan mot ditt riktiga nummer (inklusive landskod, t.ex. 971 för UAE)
  const phoneNumber = "971XXXXXXXXX"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="my-float" />
    </a>
  );
};

export default WhatsApp;