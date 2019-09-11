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

export const selectSignInError = createSelector(
  [selectUserState],
  state => state.signInError
);

export const selectSignUpError = createSelector(
  [selectUserState],
  state => state.signUpError
);