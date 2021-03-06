# Redux

Redux is a library that allows us to manage large state. It allows React state to be more scalable.
In fact, we can think of Redux as a substitute of React's `this.state`.

A common pattern is to keep only important state into the Redux store while keeping UI specific state, like form inputs, in this.state.

## Why do we even need Redux??

- Good for managing large state
- Useful for sharing state between components
- Predictable state management

## The 3 Principles

Redux gives us a way to manage state in a predictable way thanks to the following three principles:

1. Single source of truth
   We have only one big object (`store`) that describes the state of the entire app.

2. State is read only
   The state object (`store`) is immutable and it will never get modified.
   We create a new state after each action taken by the user.

3. Changes using pure functions
   A pure function is a function that receives an input and always returns a predictable output.

## The Redux Flow

Action --> Middleware --> Root Reducer --> Store --> React --> DOM changes

An `action` is a real action that the user performs, like clicking a button or a dropdown.
This action, made by the user, triggers a reducer. With Redux, we want all the actions to go through a reducer, instead of triggering an immediate DOM update.

A `reducer` is a pure function that receives as an input an `action` and creates an output that is represented by a `store` update. A reducer represents a 'slice of state'. Multiple reducers, with multiple pieces of state, make the `root reducer`, representing the app state.

The `store` update notifies the UI library, `React`, that it needs to update the `DOM`, in order to present the new changes to the user. This happens with the store passing state as props down to the components that need it.

## The Flux Pattern

Action --> Dispatcher --> Store --> View

The `Redux Flow` follows the `Flux Pattern`, which is famous for the concept of one-way data flow.

## Actions

So far, we identified `actions` as some real 'action' that the user performs when using our app.
If we translate this into code, we write actions as object containing two properties: `type` and `payload`.

The `type` property is a `string` value and it's required. The `payload` can be any type of data and it's optional.

## Reducers

The `reducer`, a pure function, takes the action object and first of all checks the action type, in order to know if it can be handled by that particular reducer.
For instance, if we want to update the user reducer, only the 'user reducer' cares about that particular action.
Once the `type` property of an action matches the right reducer, the `payload` property of that action will update the reducer.
This change will generate a state update in the `store` which will pass the changes as props down to the component that needs it.

Example:

```js
const userReducer = (currentState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        currentUser: action.payload,
      }
    default:
      return currentState
  }
}
```

From the above `userReducer` example, we see that it's a pure function that takes as arguments the `state` that we had before the action was performed and the latest performed `action`.

Inside the reducer, we check the action `type` to see if it matches the `case` specified in the reducer.
If it does, we return a new object with the updated `currentUser`.
We return a new object because we never modify the original state, plus we want the new object to cause a re-render of the interested component.

If the action `type` does not match, we just return the `currentState`, since we don't want to re-render anything.

The `userReducer` function will return a new object that is going to be the new state of our `userReducer`.

Note: Every single reducer receives every single action that gets fired, even if those actions are not related to a particular reducer. That's why we've a `default` case inside the `switch` statement; so if there is no match the `currentState` will be returned.

## Middleware

A `middleware` is a piece of code that gets the action before it reaches the reducer.
An example of middleware is the `redux-logger`. Its job is to log any action that gets fired, in addition to the state of the reducer before and after the action was performed.

## Provider

The `Provider` is a component that we wrap around the entire application.
It's the parent component of the entire application, since we want all the app components to have access to the `store` object.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
```

## Root reducer

The `root reducer` is the base reducer that combines together all the other reducers, or pieces of state into one single big object.

## Action creator

An action creator is just a function that returns an action (or object).

```js
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
})
```

## connect

`connect` is a HOC that let's us modify a component in order to give it access to Redux functionalities.
It takes two arguments `mapStateToProps()` and `mapDispatchToProps`.

### mapStateToProps

`mapStateToProps` is a function that allows a component to access `state`, which is represented by the `rootReducer`.
In the example below, we can see that `mapStateToProps` takes the `rootReducer` (or state) and returns an object that has a property called `currentUser` (just like the prop that we pas to the component) and a value equal to `user`, which references the `userReducer` which returns `currentUser`.

```jsx
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  ...
);

const mapStateToProps = ( state ) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
```

We can pass to `mapStateToProps` also a second optional parameter, called `ownProps`.
It represents the props of the component that we're wrapping with `connect`.

Example:

```js
const CollectionPage = ({ collection }) => <div />

// Here, the selectCollection selector needs a part of the state depending on the URL parameter
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
```

### mapDispatchToProps

The second argument that we pass to `connect` is the function `mapDispatchToProps`.
This function takes a `dispatch` property and returns an object where the prop name will be whatever prop we want to pass in that dispatches the new action that we are trying to pass.

```jsx
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

class App extends React.Component {
  ...
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
```

One important thing to keep in mind while using `connect` and `mapDispatchToProps` is that, if we do not specify `mapDispatchToProps` inside of `connect`, it'll pass a `dispatch` property to our component automatically.

Example:

```jsx
const CartDropdown = ({ history, dispatch }) => (
  <div className="cartDropdown">
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
```

## Memoization

Memoization is a specific form of caching that involves caching the return value of a function based on its parameters.

Example:

```js
let cache = {}

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('loooong time')
    cache[n] = n + 80
    return cache[n]
  }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))
```

## Selectors

A selector is some code that gets a state as in the whole state object and then pulls off just a small portion
or a slice of that state.
We're computing a new value based off the state.

```jsx
import React from 'react'
import { connect } from 'react-redux'

const CartIcon = ({ itemCount }) => <span>{itemCount}</span>

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  ),
})

export default connect(mapStateToProps)(CartIcon)
```

This is very bad for performance, because we don't want to re- render the `CartIcon` component every time the state changes; especially if those state changes don't actually modify the parts of the state that our component cares about.

Thus, if the `cartItems` values don't change and the output of the selector is still the same, we don't want to re-render our component.
That's why we want to store or cache the value of what our selector is using to compute its value.
This is also called `memoization` (or caching of the selector's value).

We can achieve `memoization` using the `reselect` library.

## reselect

We can write two types of selector: `input selectors` and `output selector`.
The first type, `input selector` does not use `createSelector` from the `reselect` library.
An input selector is a function that takes the whole state and returns a slice of it (one layer deep usually).

Example:

```js
// input selector
const selectCart = (state) => state.cart
```

The second type, `output selector` uses `input selectors` and `createSelector` to build itself.
In code, an output selector is made by using `createSelector` and passing it two arguments.
The first argument is a collection (or array) of input selectors.
The second argument is going to be a function that will return the value we want out of the selector.
This function takes as argument each output of the input selector in the array.

Basically, an output selector is like an input selector going more than one layer deep.

Example:

```js
import { createSelector } from 'reselect'

// input selector
const selectCart = (state) => state.cart

// output selector (it's also memoized)
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)
```

The `reselect` library allows us also to combine selectors together.
If in one of our components, we've to face a similar case like the code below:

```js
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
})
```

we can combine the selectors, using `createStructuredSelector` (from `reselect`), which will pass `state` automatically to each selector:

```js
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})
```

## redux-thunk

`redux-thunk` is a middleware that handles async actions. It doesn't care about action objects. Instead it handles only functions.

A `thunk` is an action creator which returns a function that gets access to `dispatch` (very similar to `mapDispatchToProps`). In this way we can dispatch multiple actions and handle async code inside of it.

Once `redux-thunk` is installed, example:

```js
import { ShopActionTypes } from './shopTypes'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionsStart())

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
}
```
