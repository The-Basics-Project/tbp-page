import React, { useContext } from 'react';
import './index.scss';
import logo from '../../images/icon.svg';
import CtaButton from '../../components/CTAButton';
import { ModalContext, MODAL_TYPES } from '../../context/ModalContext';

const links = [{ name: 'OUR MISSION', link: '#our-mission' }, { name: 'FOCUS AREAS', link: '#focus-areas' }, { name: 'IMPACT', link: '#impact' }];

function Navbar() {
  const [, setShowModal] = useContext(ModalContext);
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="The Basics Project Logo" />
      <div className="navbar__items">
        {links.map((link) => (
          <a href={link.link}><span>{link.name}</span></a>
        ))}
        <CtaButton />
      </div>
      <button
        type="button"
        className="navbar__menu-icon"
        onClick={() => {
          setShowModal(MODAL_TYPES.NAVBAR_MENU);
        }}
      >
        ☰

      </button>
    </div>
  );
}

export default Navbar;
