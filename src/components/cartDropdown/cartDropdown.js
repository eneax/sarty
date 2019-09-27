import React from 'react'

import './cartDropdown.scss'
import CustomButton from '../customButton/customButton'


const CartDropdown = () => ( 
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

export default CartDropdown
