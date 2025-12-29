import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Contact.css';

const Contact = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="contact-wrapper">
      {/* 1. HERO BILD SEKTION */}
      <div className="contact-hero" style={{ backgroundImage: `url('/images/Event.jpeg')` }}>
        <div className="contact-hero-overlay">
          <div className="hero-text-content">
            <h1>Let’s Create Magic Together</h1>
            <div className="hero-line"></div>
            <p>Your Vision, Our Expertise. Unforgettable Experiences Await.</p>
          </div>
        </div>
      </div>

      <div className="contact-main-content">
        <div className="container contact-grid">
          
          {/* 2. FORMULÄR (Ligger först för mobil-läge) */}
          <div className="contact-form-side">
            <form className="main-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              
              <div className="form-row">
                <div className="phone-input-wrapper">
                  <PhoneInput
                    country={'ae'}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: 'phone',
                      required: true,
                    }}
                    containerClass="phone-container"
                    inputClass="phone-input-field"
                    enableSearch={true}
                  />
                </div>
              </div>

              <div className="form-row">
                <select required>
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="party">Private Party</option>
                  <option value="other">Other</option>
                </select>
                <select required>
                  <option value="">Need any rental service?</option>
                  <option value="yes">Yes, I need rentals</option>
                  <option value="no">No, only planning</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit" className="contact-submit">Submit Request</button>
            </form>
          </div>

          {/* 3. FÖRETAGSINFO (Ligger efter formulär i mobil) */}
          <div className="contact-info-side">
            <div className="info-header">
              <h2>Contact Us</h2>
              <div className="small-line"></div>
            </div>

            <div className="info-details">
              <div className="detail-item">
                <div className="icon-box"><FontAwesomeIcon icon={faPhone} /></div>
                <div className="text-box">
                  <h4>Phone</h4>
                  <p>+971 4 XXX XXXX</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-box"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="text-box">
                  <h4>Email</h4>
                  <p>info@neverbetter.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-box"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                <div className="text-box">
                  <h4>Location</h4>
                  <p>Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="icon-box"><FontAwesomeIcon icon={faClock} /></div>
                <div className="text-box">
                  <h4>Opening Hours</h4>
                  <p>Mon - Sat: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4. KARTA */}
        <div className="map-section">
          <iframe 
            title="Never Better Location Dubai"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.322896647225!2d55.26572115!3d25.1815668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f422def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sse!4v1708450000000!5m2!1sen!2sse" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default Contact;