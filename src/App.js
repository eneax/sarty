import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Sign from './pages/sign/sign'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user

      })
      console.log(user);
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

export default App;


/*
* auth.onAuthStateChanged()

- onAuthStateChanged() is a method on the auth library
- we use it to keep track of the user state (if he/she is logged in or not)

*/