import React from 'react';
import PropTypes from 'prop-types';

import './checkoutItemStyles.scss';

const CheckoutItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt={`${name} pic`} />
    </div>

    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>

    <div className="removeButton">&#10007;</div>
  </div>
);

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutItem;
