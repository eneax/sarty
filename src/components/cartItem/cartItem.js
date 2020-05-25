import React from 'react';
import PropTypes from 'prop-types';

import './cartItemStyles.scss';

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt={`${name} pic`} />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
