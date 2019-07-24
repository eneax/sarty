import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Shop from './pages/shop/shop'
import Sign from './pages/sign/sign'

function App() {
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

export default App;
