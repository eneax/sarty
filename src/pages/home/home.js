import React from 'react'
import './home.scss'

const Home = () => (
  <div className='homepage'>
    <div className="menuList">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
)

export default Home
