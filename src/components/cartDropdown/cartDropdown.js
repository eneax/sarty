import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './cartDropdownStyles.scss';
import CartItem from '../cartItem/cartItem';
import CustomButton from '../customButton/customButton';

const CartDropdown = ({ cartItems }) => (
  <div className="cartDropdown">
    <div className="cartItems">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
};

export default connect(mapStateToProps)(CartDropdown);
