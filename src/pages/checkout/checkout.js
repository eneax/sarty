import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkoutStyles';

import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import StripeCheckoutButton from '../../components/stripeButton/stripeButton';

const headerBlocks = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      {headerBlocks.map(headerBlock => (
        <HeaderBlockContainer key={headerBlock}>
          <span>{headerBlock}</span>
        </HeaderBlockContainer>
      ))}
    </CheckoutHeaderContainer>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}

    <TotalContainer>
      <span>TOTAL: €{cartTotal}</span>
    </TotalContainer>

    <WarningContainer>
      * Please use the following test credit card for payments *
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </WarningContainer>

    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
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
