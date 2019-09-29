import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import './cartDropdown.scss'
import CustomButton from '../customButton/customButton'
import CartItem from '../cartItem/cartItem'


const CartDropdown = ({ cartItems }) => ( 
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length > 0
          ? cartItems.map((cartItem) => (
              <CartItem 
                key={cartItem.id}
                item={cartItem} 
              />
            ))
          : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
