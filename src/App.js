import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage'

const hatsPage = () => {
  return (
    <div>
      <h1>hatssss</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={hatsPage} />
      </Switch>
    </div>
  );
}

export default App;
