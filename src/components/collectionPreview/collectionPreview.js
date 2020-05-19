import React from 'react';
import './collectionPreviewStyles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className='collectionPreview'>
    <h1 className='collectionTitle'>{title.toUpperCase()}</h1>
    <div className="itemsPreview">
      {items
        .filter((item, index) => index < 4) // get only 4 items as a preview
        .map((item) => (
          <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
)

export default CollectionPreview;