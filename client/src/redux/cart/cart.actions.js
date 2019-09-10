import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_ADDED_TO_CART,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  MERGE_FROM_USER_CART
} from './cart.types'
import { cartError } from '../error/error.actions';
import axios from 'axios';


export const addItemToCart = item => (dispatch, getState) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item
  });

  const token = getState().userReducer.token

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }

  axios.post('/api/cart/add', JSON.stringify(item), config)
    .catch(err => {
      dispatch(cartError(err))
    })
}

export const removeItemFromCart = item => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  });

  const token = getState().userReducer.token

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }

  axios.put('/api/cart/remove', JSON.stringify(item), config)
    .catch(err => {
      dispatch(cartError(err))
    })
}

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

export const mergeFromUserCart = cart => ({
  type: MERGE_FROM_USER_CART,
  payload: cart
})