import React from 'react'
import { withRouter } from 'react-router-dom'

import './menuItem.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem)





/*
* withRouter --> Higher Order Component (HOC)

- HOC is a function that takes a component as an argument and 
returns you a modified (powered-up) component

- it allows us to avoid the 'prop-drilling' issue,
where we'd have to pass props to a component just to pass it down again to another component.

- With 'withRouter', our MenuItem component has access to props.history, match and location
*/
