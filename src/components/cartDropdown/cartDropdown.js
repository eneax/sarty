import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

import './cartDropdown.scss'
import CustomButton from '../customButton/customButton'
import CartItem from '../cartItem/cartItem'


const CartDropdown = ({ cartItems, history, dispatch }) => ( 
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
    <CustomButton 
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))





/*
* connect
- if we don't use mapDispatchToProps, connect will pass dispatch automatically to the component
*/
