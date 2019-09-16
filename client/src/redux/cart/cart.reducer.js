import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_ADDED_TO_CART,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  MERGE_FROM_USER_CART,
  CART_ERROR,
  UPDATE_ITEM_QUANTITY
} from './cart.types'
import { CLEAR_ERRORS } from '../error/error.types';

import {
  generateCartAfterAddingItem,
  generateCartAfterRemovingItem,
  generateUserCartBeforeMerge,
  findAndUpdateItemInCart
} from './cart.utils'

const initialState = {
  cartItems: [],
  addedToCart: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADDED_TO_CART:
      return { ...state, addedToCart: !state.addedToCart }
    case ADD_ITEM_TO_CART:
      return { ...state, cartItems: generateCartAfterAddingItem(state.cartItems, action.payload) }
    case REMOVE_ITEM_FROM_CART:
      return { ...state, cartItems: generateCartAfterRemovingItem(state.cartItems, action.payload) }
    case CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(item => item._id !== action.payload._id) }
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case MERGE_FROM_USER_CART:
      return { ...state, cartItems: generateUserCartBeforeMerge(state.cartItems, action.payload) }
    case UPDATE_ITEM_QUANTITY:
      return { ...state, cartItems: findAndUpdateItemInCart(state.cartItems, action.payload.itemId, action.payload.quantity) }
    case CART_ERROR:
      return { ...state, errorMessage: action.payload }
    case CLEAR_ERRORS:
      return { ...state, errorMessage: null }
    default:
      return state;
  }
}