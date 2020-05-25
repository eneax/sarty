import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './cartDropdownStyles.scss';
import CartItem from '../cartItem/cartItem';
import CustomButton from '../customButton/customButton';

const CartDropdown = ({ cartItems }) => (
  <div className="cartDropdown">
    <div className="cartItems">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
};

export default connect(mapStateToProps)(CartDropdown);
