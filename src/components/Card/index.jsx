import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Card({
  image,
  title,
}) {
  return (
    <div className="card">
      <img src={image.src} alt={image.alt} />
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
