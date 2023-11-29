import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Footer from '../../containers/Footer';
import Navbar from '../../containers/Navbar';
import Modal from '../Modal';
import ModalContextRoot from '../../context/ModalContext';

function Layout({
  children,
}) {
  return (
    <ModalContextRoot>
      <Helmet>
        <title>The Basics Project Foundation: Home</title>
      </Helmet>
      <main>
        <Navbar />
        {children}
        <Footer />
        <Modal />
      </main>
    </ModalContextRoot>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Layout;
