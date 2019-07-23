import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/home/home'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

export default App;
