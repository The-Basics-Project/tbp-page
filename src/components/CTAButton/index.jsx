import React, { useContext } from 'react';
import './index.scss';
import { ModalContext, MODAL_TYPES } from '../../context/ModalContext';

function CtaButton() {
  const [, setShowModal] = useContext(ModalContext);
  return (
    <button
      type="button"
      className="cta-button"
      onClick={() => {
        setShowModal(MODAL_TYPES.CONTRIBUTE);
      }}
    >
      <span>CONTRIBUTE</span>
    </button>
  );
}

export default CtaButton;
