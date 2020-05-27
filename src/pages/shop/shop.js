import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';

const Shop = ({ match }) => (
  <div className="shopPage">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

Shop.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Shop;
