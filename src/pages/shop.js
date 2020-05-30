import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { firestore, convertCollectionSnapshotToMap } from '../firebase/firebase.utils'
import { updateCollections } from '../redux/shop/shopActions'

import CollectionPage from './collection';
import CollectionsOverview from '../components/collectionsOverview';
import WithSpinner from '../components/withSpinner';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class Shop extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Route exact path={`${match.path}`} render={
          (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> 
        } />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

Shop.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Shop);
