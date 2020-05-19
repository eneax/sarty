import React from 'react';
import './homepageStyles.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="menuList">
        <div className="menuItem">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menuItem">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;