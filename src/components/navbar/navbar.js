import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'
import { ReactComponent as Logo } from '../../images/crown.svg'

const Navbar = () => (
  <div className='navbar'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      <Link className='option' to='/signIn'>
        Sign
      </Link>
    </div>
  </div>
)

export default Navbar


/*
* import { ReactComponent as Logo }

- it's a new special syntax when importing SVG in React
- it tells Create React App that you want a React component that renders an SVG
*/