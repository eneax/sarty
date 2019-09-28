import { createSelector } from 'reselect'


const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => (
    cartItems.reduce((accumulatedQuantity, cartItem) => (
      accumulatedQuantity + cartItem.quantity
    ), 0)
  )
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)





/*
* memoizastion 
  - caching of selector's value
  - helps us prevent components to re-render if the component's state doesn't change

* reselect library 
  - allows us to memoize and not re-render a component if the state value does not change.

* Selectors
  - input selector --> it's a function that gets the whole state and returns just a slice of it
  - output selector  


* createSelector() takes two arguments:
  - a collection (basically an array) of input selectors
  - a function that returns the values we want out of the selector
*/