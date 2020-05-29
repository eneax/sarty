import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionSnapshotToMap } from '../firebase/firebase.utils'

import CollectionPage from './collection';
import CollectionsOverview from '../components/collectionsOverview';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionSnapshotToMap(snapshot);
    })
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

Shop.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Shop;
