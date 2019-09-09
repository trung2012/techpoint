import {
  GET_ERRORS,
  CLEAR_ERRORS
} from './error.types';

const initialState = {
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, errorMessage: action.payload }
    case CLEAR_ERRORS:
      return state
    default:
      return state
  }
}