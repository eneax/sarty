import React from 'react'

import './cartDropdown.scss'
import Button from '../button/button'


const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" />

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
