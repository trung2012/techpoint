import {
  SHOP_ERROR,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  CLEAR_ERRORS,
  CART_ERROR
} from './error.types';

export const shopError = message => ({
  type: SHOP_ERROR,
  payload: message
});

export const signInError = message => ({
  type: SIGNIN_ERROR,
  payload: message
})

export const signUpError = message => ({
  type: SIGNUP_ERROR,
  payload: message
})

export const cartError = message => ({
  type: CART_ERROR,
  payload: message
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});