import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import './cartDropdown.scss'
import CustomButton from '../customButton/customButton'
import CartItem from '../cartItem/cartItem'


const CartDropdown = ({ cartItems, history }) => ( 
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
      onClick={() => history.push('/checkout')}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
