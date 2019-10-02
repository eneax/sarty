import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cartActions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkoutItemStyles'


const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='checkout item' />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>
      
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      
      <TextContainer>{price}</TextContainer>
      
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)} >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
