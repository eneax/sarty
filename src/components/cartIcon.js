import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../redux/cart/cartActions'
import { selectCartItemsCount } from '../redux/cart/cartSelectors'

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './styles/cartIconStyles'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>
      {itemCount}
    </ItemCount>
  </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
