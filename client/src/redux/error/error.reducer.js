import {
  SHOP_ERROR,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  CLEAR_ERRORS
} from './error.types';
const initialState = {
  shopError: null,
  signInError: null,
  signUpError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOP_ERROR:
      return { ...state, shopError: action.payload };
    case SIGNIN_ERROR:
      return { ...state, signInError: action.payload };
    case SIGNUP_ERROR:
      return { ...state, signUpError: action.payload };
    case CLEAR_ERRORS:
      return { ...state, initialState }
    default:
      return state
  }
}