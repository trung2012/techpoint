import { TOGGLE_DROPDOWN } from './navigation.types';

const initialState = {
  isNavigationDropdownHidden: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return { ...state, isNavigationDropdownHidden: !state.isNavigationDropdownHidden }
    default:
      return state;
  }
}