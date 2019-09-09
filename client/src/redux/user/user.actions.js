import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT
} from './user.types';

import { mergeFromUserCart, clearCart } from '../cart/cart.actions';
import axios from 'axios';
import { signInError, signUpError } from '../error/error.actions';
import history from '../../history';

export const signInStart = () => ({
  type: SIGN_IN_START
})

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  payload: data
})

export const signUpStart = () => ({
  type: SIGN_UP_START
})

export const signUpSuccess = data => ({
  type: SIGN_UP_SUCCESS,
  payload: data
})

export const signUpAsync = ({ displayName, email, password }) => dispatch => {
  dispatch(signUpStart());

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ name: displayName, email, password });

  axios.post('/api/users', body, config)
    .then(res => {
      dispatch(signUpSuccess(res.data))
      history.push('/')
    })
    .catch(err => {
      dispatch(signUpError(err.response.data))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const signInAsync = ({ email, password }) => dispatch => {
  dispatch(signInStart());

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password });

  axios.post('/api/users/login', body, config)
    .then(res => {
      dispatch(signInSuccess(res.data))
      dispatch(mergeFromUserCart(res.data.user.cart))
      history.push('/')
    })
    .catch(err => {
      dispatch(signInError(err.response.data))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_USER_START
  })
  const token = getState().userReducer.token

  const requestConfig = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

  axios.get('/api/users', requestConfig)
    .then(res => dispatch({
      type: LOAD_USER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const signOut = () => dispatch => {
  dispatch(clearCart());
  dispatch({ type: SIGN_OUT });
}
