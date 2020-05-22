import React from 'react';
import PropTypes from 'prop-types';

import './collectionItem.scss';

const CollectionItem = ({ imageUrl, name, price }) => (
  <div className="collectionItem">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collectionFooter">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CollectionItem;
