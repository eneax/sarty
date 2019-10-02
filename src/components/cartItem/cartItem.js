import React from 'react'

import {
  CartItemContainer,
  ItemsDetails
} from './cartItemStyles'


const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />

    <ItemsDetails>
      <span>{name}</span>
      <span>{quantity} x €{price}</span>
    </ItemsDetails>
  </CartItemContainer>
)

export default CartItem
