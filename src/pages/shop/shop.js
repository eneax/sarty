import React, { Component } from 'react';
import SHOP_DATA from './shopData';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    }
  }

  render() {
    return (
      <div>
        This is a shop page
      </div>
    );
  }
}

export default Shop;