import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/collectionPreview/collectionPreview';

const Shop = ({ collections }) => (
  <div className="shopPage">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

Shop.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Shop);
