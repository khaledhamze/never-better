import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url('/images/Event.jpeg')`
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-container" style={heroStyle}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Creating Unforgettable Moments <br /> 
              For Your Special Events
            </h1>
            <Link to="/contact" className="hero-cta">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-sub-text">
        <p>Expert Event Management & Wedding Planning Services.</p>
        <p>
            With passion and creativity, we create unforgettable experiences. 
            Whether it's a corporate event, a beautiful wedding, or a private party, 
            we make sure every detail is perfect. We are new, driven, and ready to 
            make your next event our best one yet.
        </p>
      </div>
    </section>
  );
};

export default Hero;