import {
  FETCH_SHOP_DATA_START,
  FETCH_SHOP_DATA_SUCCESS
} from './shop.types'

const initialState = {
  categoriesData: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOP_DATA_START:
      return { ...state, isLoading: true }
    case FETCH_SHOP_DATA_SUCCESS:
      return { ...state, categoriesData: action.payload, isLoading: false }
    default:
      return state;
  }
}