import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// Importera Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Kolumn 1: Logo och kort beskrivning + Sociala ikoner */}
        <div className="footer-section about">
          <h2 className="footer-title">NEVER BETTER</h2>
          <p>
            Your premier event management partner in the UAE. We turn your 
            vision into reality with precision and creative excellence.
          </p>
          {/* HÄR LÄGGER VI TILL SOCIALA IKONER */}
          <div className="social-icons">
            <a href="https://facebook.com/dittforetag" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com/dittforetag" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Kolumn 2: Snabblänkar */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Kolumn 3: Kontaktuppgifter */}
        <div className="footer-section contact">
          <h3>Get In Touch</h3>
          <div className="contact-item">
            <strong>Location:</strong>
            <p>Dubai, United Arab Emirates</p>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>info@neverbetter.com</p>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            <p>+971 4 XXX XXXX</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} NEVER BETTER EVENT MANAGEMENT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;