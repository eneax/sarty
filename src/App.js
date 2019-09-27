import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/userActions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import Sign from './pages/sign/sign'


class App extends React.Component {
  // Initial subscription is null
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    // Store user data in our app
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth) // null
      }
    })
  }

  componentWillUnmount() {
    // Close subscription and avoid leaks
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={Sign} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);





/*
* connect(null, mapDispatchToProps)
- null because we don't need mapStateToProps, since App doesn't need currentUser
- mapDispatchToProps gets a dispatch property and returns an object where the prop name will be whatever prop
  we want to pass in that dispatches the new action that we are trying to pass
- dispatch() takes an action object an passes it to every reducer


* setCurrentUser replaces this.setState()
*/ 