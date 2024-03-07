import React, { useContext } from 'react';
import './index.scss';
import logo from '../../images/icon.svg';
import CtaButton from '../../components/CTAButton';
import { ModalContext, MODAL_TYPES } from '../../context/ModalContext';
import {Link} from 'gatsby';

const links = [{ name: 'OUR MISSION', link: '#our-mission' }, { name: 'FOCUS AREAS', link: '#focus-areas' }, { name: 'IMPACT', link: '#impact' }];

function Navbar() {
  const [, setShowModal] = useContext(ModalContext);
  return (
    <header className="navbar">
      <Link href='/'>
      <img className="navbar__logo" src={logo} alt="The Basics Project Logo" />
      </Link>
      <nav className="navbar__items">
        {links.map((link) => (
          <a href={link.link}><span>{link.name}</span></a>
        ))}
        <CtaButton />
      </nav>
      <button
        type="button"
        className="navbar__menu-icon"
        onClick={() => {
          setShowModal(MODAL_TYPES.NAVBAR_MENU);
        }}
      >
        ☰

      </button>
    </header>
  );
}

export default Navbar;
