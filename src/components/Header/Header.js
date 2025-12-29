import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Importera NavLink
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/images/NeverBetter.jpg" alt="NeverBetter Logo" className="logo-img" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
        </div>

        <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" className="cta-button" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;