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

Action --> Root Reducer --> Store --> React --> DOM changes

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
