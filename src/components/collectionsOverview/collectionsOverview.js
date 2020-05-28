import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import { CollectionsOverviewContainer } from './collectionsOverviewStyles';

import CollectionPreview from '../collectionPreview/collectionPreview';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(CollectionsOverview);
