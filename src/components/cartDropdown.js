import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../redux/cart/cartSelectors'
import { toggleCartHidden } from '../redux/cart/cartActions'

import { 
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartDropdownButton
} from './styles/cartDropdownStyles'
import CartItem from './cartItem'


const CartDropdown = ({ cartItems, history, dispatch }) => ( 
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length > 0
          ? cartItems.map((cartItem) => (
              <CartItem 
                key={cartItem.id}
                item={cartItem} 
              />
            ))
          : <EmptyMessage>Your cart is empty</EmptyMessage>
      }
    </CartItemsContainer>
    <CartDropdownButton 
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))





/*
* connect
- if we don't use mapDispatchToProps, connect will pass dispatch automatically to the component
*/
