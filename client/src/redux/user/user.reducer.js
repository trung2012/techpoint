import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
  SIGNIN_ERROR,
  SIGNUP_ERROR
} from './user.types';
import { CLEAR_ERRORS } from '../error/error.types';

const initialState = {
  user: null,
  isSignedIn: false,
  isUserLoading: false,
  token: window.localStorage.getItem('token'),
  signInError: null,
  signUpError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
    case SIGN_UP_START:
    case LOAD_USER_START:
      return { ...state, isUserLoading: true }
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case LOAD_USER_SUCCESS:
      window.localStorage.setItem('token', action.payload.token);
      return { ...state, user: action.payload.user, token: action.payload.token, isSignedIn: true, isUserLoading: false }
    case AUTH_ERROR:
    case SIGN_OUT:
      window.localStorage.removeItem('token');
      return { ...state, user: null, isSignedIn: false, isUserLoading: false }
    case SIGNIN_ERROR:
      return { ...state, signInError: action.payload }
    case SIGNUP_ERROR:
      return { ...state, signUpError: action.payload }
    case CLEAR_ERRORS:
      return {
        ...state,
        signInError: null,
        signUpError: null
      }
    default:
      return state;
  }
}