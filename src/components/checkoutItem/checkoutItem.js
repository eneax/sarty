import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart } from '../../redux/cart/cartActions'

import './checkoutItem.scss'


const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='checkout item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div 
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
