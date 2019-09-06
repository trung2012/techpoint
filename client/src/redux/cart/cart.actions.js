import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART_HIDDEN,
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

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
})

export const clearCart = () => ({
  type: CLEAR_CART
})