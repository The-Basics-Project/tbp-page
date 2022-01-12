import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MODAL_TYPES = {
  NAVBAR_MENU: 0,
  CONTRIBUTE: 1,
  NONE: 2,
};

export const ModalContext = createContext([
  MODAL_TYPES.NONE,
  () => {},
]);

function ModalContextRoot({
  children,
}) {
  const showModalState = useState(MODAL_TYPES.NONE);
  return (
    <ModalContext.Provider value={showModalState}>
      {children}
    </ModalContext.Provider>
  );
}

ModalContextRoot.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default ModalContextRoot;
