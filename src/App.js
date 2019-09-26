import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import Sign from './pages/sign/sign'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  // Initial subscription is null
  unsubscribeFromAuth = null

  componentDidMount() {
    // Make app aware of the user state (if it's logged in or not)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount() {
    // Close subscription and avoid leaks
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={Sign} />
        </Switch>
      </div>
    )
  }
}

export default App;
