import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './navbar.scss'
import { ReactComponent as Logo } from '../../images/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cartDropdown'

const Navbar = ({ currentUser }) => (
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
      {
        currentUser
          ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
          : <Link className='option' to='/signIn'>Sign In</Link>
      }
      <CartIcon />
    </div>

    <CartDropdown />
  </div>
)

const mapStateToProps = (state) => ({ // state = rootReducer
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar)





/*
* import { ReactComponent as Logo }

- it's a new special syntax when importing SVG in React
- it tells Create React App that you want a React component that renders an SVG
*/



/* 
* connect

- it's a higher order component (HOC) that lets us modify our component so that we can have access to redux
- HOC take a component and return a super-powerful component
- its first argument is mapStateToProps
*/



/*
* mapStateToProps

- it's a function that allows us to access the state, with the state being our rootReducer
- it returns an object, where the name of the property will be the actual property we pass in and the value will be the value

*/