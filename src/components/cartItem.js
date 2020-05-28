import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const CartItemImage = styled.img`
  width: 30%;
`;

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

// component
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
