import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIconStyles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CartIcon);
