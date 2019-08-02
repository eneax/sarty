import React from 'react'
import { connect } from 'react-redux'

import './cartDropdown.scss'
import Button from '../button/button'
import CartItem from '../cartItem/cartItem'


const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem 
            key={cartItem.id}
            item={cartItem}
          />
        ))}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)
