export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    return (
      cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
    )
  }

  // if the item does not exist, we add it with a quantity of 1
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}


/*
  * addItemToCart

  - takes the current items in the cart and the item that we want to add
  - find() returns the first item found in the array that satisfies our conditions
  - if find() doesn't find anything, then it returns undefined
  - 
*/