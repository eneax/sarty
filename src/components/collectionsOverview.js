import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectCollectionsForPreview } from '../redux/shop/shopSelectors';

import CollectionPreview from './collectionPreview';

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
