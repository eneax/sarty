export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return (
      cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    )
  }

  // if the item we want to add doesn't exist inside the cartItems array, we add it with quantity = 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};





/*
* .find() --> returns the first item found in an array based on a specified condition
*/ 
