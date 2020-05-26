import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './checkoutStyles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkoutPage">
    <div className="checkoutHeader">
      <div className="headerBlock">
        <span>Product</span>
      </div>
      <div className="headerBlock">
        <span>Description</span>
      </div>
      <div className="headerBlock">
        <span>Quantity</span>
      </div>
      <div className="headerBlock">
        <span>Price</span>
      </div>
      <div className="headerBlock">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => cartItem.name)}

    <div className="total">
      <span>TOTAL: €{cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
};

export default connect(mapStateToProps)(CheckoutPage);
