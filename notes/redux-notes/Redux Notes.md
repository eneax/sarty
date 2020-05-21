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
