import React from 'react'

import SHOP_DATA from '../../data/shopData'
import CollectionList from '../../components/collectionList/collectionList'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionList 
              key={id}
              {...otherCollectionProps}
            />
          ))
        }
      </div>
    )
  }
}

export default Shop
