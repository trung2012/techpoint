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

const initialState = {
  user: null,
  isSignedIn: false,
  isUserLoading: false,
  token: window.localStorage.getItem('token')
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
    default:
      return state;
  }
}