import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/userActions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/userSelectors'

import './App.css'
import Header from './components/header'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import Sign from './pages/sign'
import Checkout from './pages/checkout'


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
          <Route 
            exact 
            path='/sign' 
            render={
              () => this.props.currentUser 
                ? (<Redirect to='/' />) 
                : (<Sign/>)
            } 
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);





/*
* connect(mapStateToProps, mapDispatchToProps)
- mapStateToProps is needed in order to get the currentUser from the store
- mapDispatchToProps gets a dispatch property and returns an object where the prop name will be whatever prop
  we want to pass in that dispatches the new action that we are trying to pass
- dispatch() takes an action object an passes it to every reducer


* setCurrentUser replaces this.setState()
*/ 