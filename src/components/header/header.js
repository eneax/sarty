import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      <Link className='option' to='/sign'>SIGN</Link>
    </div>
  </div>
)

export default Header
