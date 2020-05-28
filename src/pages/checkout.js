import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';

import CheckoutItem from '../components/checkoutItem';
import StripeCheckoutButton from '../components/stripeButton';

// styles
const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

// component
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
