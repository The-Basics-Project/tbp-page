import React, { useContext } from 'react';
import './index.scss';
import { ModalContext, MODAL_TYPES } from '../../context/ModalContext';
import paymentImage from "../../images/qr-payment.jpg";

function Modal() {
  const [showModal, setShowModal] = useContext(ModalContext);
  switch (showModal) {
    case MODAL_TYPES.CONTRIBUTE:
      return (
        <div className="modal">
          <div className="modal__card">
            <button
              type="button"
              className="modal__close-btn"
              onClick={() => {
                setShowModal(MODAL_TYPES.NONE);
              }}
            >
              ×

            </button>
            <p className="modal__content">
              {'Scan and Donate here: '}
              <img className="modal__image" src={paymentImage} alt="Payment QR Code" />
            </p>
          </div>
        </div>
      );

    case MODAL_TYPES.NAVBAR_MENU:
      return (
        <div className="modal">
          <div className="modal__card">
            <button
              type="button"
              className="modal__close-btn"
              onClick={() => {
                setShowModal(MODAL_TYPES.NONE);
              }}
            >
              ×

            </button>
            <p className="modal__content">
              Email us at
              {' '}
              <a target="_blank" href="mailto:contact.thebasicsproject@gmail.com" rel="noreferrer">
                <span>contact.thebasicsproject@gmail.com</span>
              </a>
              {' '}
              or DM us at
              {' '}
              <a target="_blank" href="https://www.instagram.com/thebasicsproject_/" rel="noreferrer"><span>@thebasicsproject_</span></a>
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default Modal;
