import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Jawabu from '../logo/jawabu.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a NavLink is clicked
  };

  return (
    <div className="navbar">
      <nav>
        <img src={Jawabu} alt="Jawabu Events Logo" className="logo" />
        <div className="hamburger">
        <button
          className="hamburger-menu"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2zm0-4a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2zm0-4a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2z"/>
          </svg>
        </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleNavLinkClick}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/booking" onClick={handleNavLinkClick}>Booking</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
