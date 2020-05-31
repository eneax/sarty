import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import AuthPage from './pages/auth';
import CheckoutPage from './pages/checkout';

import Header from './components/header';
import GlobalStyle from './components/globalStyles';


class App extends React.Component {
  // close subscription to auth
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // store user data in app 'state'
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else { // if the user logs out we set the currentUser to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/authentication' 
            render={
              () => this.props.currentUser ? <Redirect to='/' /> : <AuthPage /> 
            } 
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
