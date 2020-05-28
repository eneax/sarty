import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shopSelectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collectionStyles';

import CollectionItem from '../../components/collectionItem/collectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

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
