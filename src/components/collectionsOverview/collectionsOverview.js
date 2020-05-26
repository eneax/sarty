import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shopSelectors';

import './collectionsOverviewStyles.scss';

import CollectionPreview from '../collectionPreview/collectionPreview';

const CollectionsOverview = ({ collections }) => (
  <div className="collectionsOverview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(CollectionsOverview);
