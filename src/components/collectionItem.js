import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../redux/cart/cartActions'
import { 
  CollectionItemContainer, 
  BackgroundImage, 
  CollectionFooterContainer, 
  NameContainer, 
  PriceContainer,
  AddButton
} from './styles/collectionItemStyles'


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className='image'
        imageUrl={imageUrl}
      />
  
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
  
      <AddButton 
        inverted 
        onClick={() => addItem(item)}
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
