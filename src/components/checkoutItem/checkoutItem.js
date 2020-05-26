import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cartActions';

import './checkoutItemStyles.scss';

const CheckoutItem = ({ item, removeItemFromCart }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt={`${name} pic`} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>

      <span className="price">{price}</span>

      <div className="removeButton" onClick={() => removeItemFromCart(item)}>
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
