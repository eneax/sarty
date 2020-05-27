import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelectors';

import './collectionStyles.scss';

const CollectionPage = ({ collection }) => (
  <div className="collectionPage">
    <h2>Collection Page</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

CollectionPage.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    routeName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(CollectionPage);
