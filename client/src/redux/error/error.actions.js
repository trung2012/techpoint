import {
  GET_ERRORS,
  CLEAR_ERRORS
} from './error.types';

export const getErrors = (message, status) => ({
  type: GET_ERRORS,
  payload: { message, status }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

