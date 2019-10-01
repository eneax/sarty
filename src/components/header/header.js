import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { selectCartHidden } from '../../redux/cart/cartSelectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './headerStyles'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cartDropdown'


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser
          ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          : <OptionLink to='/sign'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden 
        ? null
        : <CartDropdown />
    }
  </HeaderContainer>
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