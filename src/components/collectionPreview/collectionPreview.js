import React from 'react'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collectionPreviewStyles'
import CollectionItem from '../collectionItem/collectionItem'


const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {
          items
            .filter((item, i) => i < 4)
            .map((item) => ( 
              <CollectionItem 
                key={item.id}
                item={item}
              />
            ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
