import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);





/* 
* Provider

- it's a giant object that makes the store accessible everywhere in our app
- it needs to wrap the entire app
*/