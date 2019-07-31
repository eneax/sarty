import React from 'react'

import './cartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg'


const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
