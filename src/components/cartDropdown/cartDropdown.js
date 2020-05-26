import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './cartDropdownStyles.scss';
import CartItem from '../cartItem/cartItem';
import CustomButton from '../customButton/customButton';

const CartDropdown = ({ cartItems, history }) => (
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
    <CustomButton onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
