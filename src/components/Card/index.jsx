import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Card({
  image,
  title,
}) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image.src} alt={image.alt} />
      </div>
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
