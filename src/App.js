import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'

import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Sign from './pages/sign/sign'


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if userAuth is not null (run code only if user is signing in) 
      if (userAuth) {
        // if a document exists, get back the userRef otherwise make a new document
        const userRef = await createUserProfileDocument(userAuth)

        // listen to userRef for any changes to the user data and set the state to the current data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ // setCurrentUser = this.setState
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else { // if user signs out
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    // when the component un-mounts we want to close the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signIn' component={Sign} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App)





/*
* auth.onAuthStateChanged()

- onAuthStateChanged() is a method on the auth library
- we use it to keep track of the user state (if he/she is logged in or not)
*/
