import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/cart/cartActions';

import './checkoutItemStyles.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt={`${name} pic`} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="removeButton" onClick={() => clearItemFromCart(item)}>
        &#10007;
      </div>
    </div>
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
