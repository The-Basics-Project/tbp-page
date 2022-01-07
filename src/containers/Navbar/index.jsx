import React from 'react';
import './index.scss';
import logo from '../../images/icon.svg';

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="The Basics Project Logo" />
      <div className="navbar__items">
        <span>Mission Statement</span>
        <span>Focus Areas</span>
      </div>
    </div>
  );
}

export default Navbar;
