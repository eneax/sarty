import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../redux/shop/shopSelectors'

import { CollectionsOverviewContainer } from './styles/collectionsOverviewStyles'
import CollectionPreview from './collectionPreview'


const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps}) => (
          <CollectionPreview 
            key={id}
            {...otherCollectionProps}
          />
        ))
      }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
