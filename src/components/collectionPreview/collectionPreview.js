import React from 'react';
import PropTypes from 'prop-types';

import './collectionPreviewStyles.scss';
import CollectionItem from '../collectionItem/collectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4) // get only 4 items as a preview
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CollectionPreview;
