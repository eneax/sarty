import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import Sign from './pages/sign/sign'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
