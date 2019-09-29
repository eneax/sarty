import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shopSelectors'

import CollectionPreview from '../../components/collectionPreview/collectionPreview'


const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <h1>Shop Page</h1>
      
      {
        collections.map(({ id, ...otherCollectionProps}) => (
          <CollectionPreview 
            key={id}
            {...otherCollectionProps}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
