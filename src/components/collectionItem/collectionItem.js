import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';

import './collectionItem.scss';
import CustomButton from '../customButton/customButton';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

CollectionItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
