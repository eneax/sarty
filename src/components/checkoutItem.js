import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../redux/cart/cartActions';

// styles
const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

// component
const CheckoutItem = ({ item, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name} pic`} />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>

      <QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>

      <TextContainer>{price}</TextContainer>

      <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
        &#10007;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
