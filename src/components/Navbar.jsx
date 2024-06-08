import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="hamburger" onClick={toggleMobileMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="navbar__logo" id="navbar__logo">
        <i className="fa-solid fa-diagram-project"></i> Projex
      </div>
      <ul className={`navbar__list ${isMobileMenuOpen ? 'open' : ''}`} id="navbar__list">
        <li className="navbar__item">
          <a href="#">Profile</a>
        </li>
        <li className="navbar__item">
          <div className="position-relative">
            <i
              id="bag"
              className="fa-solid fa-bag-shopping fa-2x"
              style={{ fontSize: '24px' }}
            ></i>
            <span
              id="badge"
              className="position-absolute top-0 end-0 p-1 bg-primary text-white border border-light rounded-circle"
              style={{ fontSize: '12px' }}
            ></span>
          </div>
        </li>
        <li className="navbar__item">
          <a href="#">Pricing</a>
        </li>
        <li className="navbar__item">
          <a href="#">Settings</a>
        </li>
        <li className="navbar__item">
          <a href="#">Logout</a>
        </li>
        <li className="navbar__item">
          <a href="#">
            <i className="fa-solid fa-sun"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
