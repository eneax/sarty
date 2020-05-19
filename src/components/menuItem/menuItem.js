import React from 'react';
import './menuItemStyles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menuItem ${size}`}>
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

export default MenuItem;