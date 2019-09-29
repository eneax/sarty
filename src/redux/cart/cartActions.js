import { CartActionTypes } from './cartTypes'


export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item // item we want to add
})

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item // item we want to remove
})

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item // item we want to clear
})
