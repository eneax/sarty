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
- it return a MenuItem component which has access to location, match, history props

*/
