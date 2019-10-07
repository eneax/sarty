import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/userActions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/userSelectors'

import GlobalStyles from './components/styles/globalStyles'

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
      } 
        
      setCurrentUser(userAuth) // null
    })
  }

  componentWillUnmount() {
    // Close subscription and avoid leaks
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <GlobalStyles />
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


* Observable
- it's a piece of code that wraps around a stream of events (or a stream of data)

* Observer
- it's a piece of code that has three function calls on it: next, error, complete

* Next
- a next call is the call that you execute whenever a new event happens 

* Error
- something that we do when an error occurs

* Complete
- it's an optional call that will occur if the stream is finished
- it cannot happen in Firebase, because it is a live database, where updates can always happen

* Subscription
- it's a way to tie together the observer with the observer's stream of events

*/
