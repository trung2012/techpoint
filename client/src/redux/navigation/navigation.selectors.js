import { createSelector } from 'reselect';

const selectNavigation = state => state.navigationReducer;

export const selectIsNavigationDropdownHidden = createSelector(
  [selectNavigation],
  state => state.isNavigationDropdownHidden
);