import React from 'react'
import './directoryStyles.scss'
import MenuItem from '../menuItem/menuItem'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections : [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'shop/hats'
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'shop/jackets'
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          id: 4,
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkUrl: 'shop/womens',
          size: 'large'
        },
        {
          title: 'mens',
          id: 5,
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          linkUrl: 'shop/mens',
          size: 'large'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directoryMenu">
        {this.state.sections.map(({id, title, imageUrl, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory;