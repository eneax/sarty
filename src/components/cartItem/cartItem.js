import React from 'react';
import PropTypes from 'prop-types';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './cartItemStyles';

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={`${name} pic`} />
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
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
