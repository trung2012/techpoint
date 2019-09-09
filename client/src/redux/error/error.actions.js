import {
  GET_ERRORS,
  CLEAR_ERRORS
} from './error.types';

export const getErrors = (message) => ({
  type: GET_ERRORS,
  payload: message
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

