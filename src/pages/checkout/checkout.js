import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  WarningContainer,
  TotalContainer
} from './checkoutStyles'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import StripeCheckoutButton from '../../components/stripeButton/stripeButton'


const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {
        cartItems.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))
      }

      <WarningContainer>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>

      <TotalContainer>
        <span>TOTAL: €{total}</span>
      </TotalContainer>

      <StripeCheckoutButton 
        price={total}
      />
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
