import React from 'react';
import PropTypes from 'prop-types';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collectionPreviewStyles';

import CollectionItem from '../collectionItem/collectionItem';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4) // get only 4 items as a preview
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CollectionPreview;
