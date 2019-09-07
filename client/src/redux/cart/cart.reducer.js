import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_ADDED_TO_CART,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART
} from './cart.types'

import {
  generateCartAfterAddingItem,
  generateCartAfterRemovingItem
} from './cart.utils'

const initialState = {
  cartItems: [],
  addedToCart: false,
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
      return state;
    default:
      return state;
  }
}