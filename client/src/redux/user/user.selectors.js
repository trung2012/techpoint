import { createSelector } from 'reselect';

const selectUserState = state => state.userReducer;

export const selectIsSignedIn = createSelector(
  [selectUserState],
  state => state.isSignedIn
);

export const selectCurrentUser = createSelector(
  [selectUserState],
  state => state.user
);

export const selectIsUserLoading = createSelector(
  [selectUserState],
  state => state.isUserLoading
)