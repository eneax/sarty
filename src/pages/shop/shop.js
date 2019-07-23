import React from 'react'

import SHOP_DATA from '../../data/shopData'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div>
        <h1>Shop Page</h1>
      </div>
    )
  }
}

export default Shop
