import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shopSelectors'

import './collectionsOverview.scss'
import CollectionPreview from '../collectionPreview/collectionPreview'


const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
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

export default connect(mapStateToProps)(CollectionsOverview)
