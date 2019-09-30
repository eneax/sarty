import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors'

import './checkout.scss'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import StripeCheckoutButton from '../../components/stripeButton/stripeButton'


const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        ))
      }

      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>

      <div className='total'>
        <span>TOTAL: €{total}</span>
      </div>

      <StripeCheckoutButton 
        price={total}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
