import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import './header.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cartDropdown'


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser
          ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className='option' to='/sign'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden 
        ? null
        : <CartDropdown />
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)





/*
* connect() is a HOC
- it lets us modify the component so that we have access to redux
- it takes a mapStateToProps function, which allows us to get the piece of the state we are interested in
*/ 