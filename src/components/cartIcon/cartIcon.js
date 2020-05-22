import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIconStyles.scss';

const CartIcon = () => (
  <div className="cartIcon">
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">0</span>
  </div>
);

export default CartIcon;
