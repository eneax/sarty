import React from 'react';

import './collectionPreviewStyles.scss';
import CollectionItem from '../collectionItem/collectionItem';


const CollectionPreview = ({ title, items }) => (
  <div className='collectionPreview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4) // get only 4 items as a preview
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
)

export default CollectionPreview;