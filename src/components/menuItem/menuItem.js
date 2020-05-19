import React from 'react';
import { withRouter } from 'react-router-dom'

import './menuItemStyles.scss'

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <div 
      className={`menuItem ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div 
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='backgroundImage'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);

/*
  * withRouter 
  - It's a higher order component (HOC)
  - It returns a MenuItem component with access to 'history', 'location', 'match'
*/ 