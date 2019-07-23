import React from 'react';
import { withRouter } from 'react-router-dom'

import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div 
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

/*
* withRouter() 

- it's a higher-order component (HOC)
- solves the problem of 'prop drilling', that arises when we try to pass props many steps down,
  in order to get them to the components that needs them
- it returns a MenuItem component which has access to location, match and history props even though, 
  we can access them only in the first component that gets passed in the Route (in our case Home)
*/
