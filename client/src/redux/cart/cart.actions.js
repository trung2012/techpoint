import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_ADDED_TO_CART,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART
} from './cart.types'

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item
})

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
})

export const toggleAddedToCart = () => ({
  type: TOGGLE_ADDED_TO_CART
})

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
})

export const clearCart = () => ({
  type: CLEAR_CART
})