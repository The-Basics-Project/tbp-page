import React from 'react';
import './index.scss';
import logo from '../../images/icon.svg';

const links = [{ name: 'OUR MISSION', link: '#our-mission' }, { name: 'FOCUS AREAS', link: '#focus-areas' }, { name: 'IMPACT', link: '#impact' }];

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="The Basics Project Logo" />
      <div className="navbar__items">
        {links.map((link) => (
          <a href={link.link}><span>{link.name}</span></a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
