import React from 'react'
import './collectionPreview.scss'
import CollectionItem from '../collectionItem/collectionItem'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem 
              key={id}
              {...otherItemProps}
            />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
