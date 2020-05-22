import React from 'react';

import './cartDropdownStyles.scss';
import CustomButton from '../customButton/customButton';

const CartDropdown = () => (
  <div className="cartDropdown">
    <div className="cartItems">items</div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
