import React from 'react'
import { connect } from 'react-redux'

import './collectionItem.scss'
import Button from '../button/button'
import { addItem } from '../../redux/cart/cartActions'

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item

  return (
    <div className="collection-item">
      <div 
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button 
        inverted
      >
        Add to cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
