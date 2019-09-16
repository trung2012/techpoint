import {
  FETCH_SHOP_DATA_START,
  FETCH_SHOP_DATA_SUCCESS,
  SHOP_ERROR,
  TOGGLE_DROPDOWN
} from './shop.types'
import { CLEAR_ERRORS } from '../error/error.types';

const initialState = {
  categories: [],
  isLoading: false,
  errorMessage: null,
  isNavigationDropdownHidden: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOP_DATA_START:
      return { ...state, isLoading: true }
    case FETCH_SHOP_DATA_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false }
    case SHOP_ERROR:
      return { ...state, errorMessage: action.payload }
    case TOGGLE_DROPDOWN:
      return { ...state, isNavigationDropdownHidden: !state.isNavigationDropdownHidden }
    case CLEAR_ERRORS:
      return { ...state, errorMessage: null }
    default:
      return state;
  }
}