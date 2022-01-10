import React from 'react';
import './index.scss';
import logo from '../../images/icon.svg';

const links = [
  'OUR MISSION',
  'FOCUS AREAS',
  'IMPACT',
];

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="The Basics Project Logo" />
      <div className="navbar__items">
        {links.map((link) => (
          <span>{link}</span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
