import { createSelector } from 'reselect';

const selectErrorState = state => state.errorReducer;

export const selectErrorMessage = createSelector(
  [selectErrorState],
  state => state.errorMessage
);