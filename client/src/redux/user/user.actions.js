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
import axios from 'axios';
import { getErrors } from '../error/error.actions';
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
      dispatch(getErrors(err.response.data, err.response.status))
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
      history.push('/')
    })
    .catch(err => {
      dispatch(getErrors(err.response.data))
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
      dispatch(getErrors(err.response.data));
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const signOut = () => ({
  type: SIGN_OUT
})