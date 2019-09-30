import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shopSelectors'

import './collection.scss'
import CollectionItem from '../../components/collectionItem/collectionItem'


const Collection = ({ collection }) => {
  const { title, items } = collection
  
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      
      <div className='items'>
        {items.map((item) => (
          <CollectionItem 
            className='collection-item'
            key={item.id}
            item={item} 
          />
        ))}
      </div>
    </div>
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