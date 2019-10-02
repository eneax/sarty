import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shopSelectors'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collectionStyles'
import CollectionItem from '../../components/collectionItem/collectionItem'


const Collection = ({ collection }) => {
  const { title, items } = collection
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem 
            key={item.id}
            item={item} 
          />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)





/*
* mapStateToProps take two arguments: state and ownProps
- ownProps represents the props of the component that is wrapped by connect


* selectCollection
- this selector needs a part of the state which depends on the url parameter
- curried function --> a function that returns another function
*/