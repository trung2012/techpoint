import { createSelector } from 'reselect';
import { convertShippingToFloat } from '../../utils/helper';

const selectCartReducer = state => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)

export const selectCartQuantity = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => {
    return acc + (item.quantity * item.price);
  }, 0)
)

export const selectAddedToCart = createSelector(
  [selectCartReducer],
  cart => cart.addedToCart
)

export const selectCartShipping = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => {
    return acc + convertShippingToFloat(item.shipping)
  }, 0)
)

export const selectCartError = createSelector(
  [selectCartReducer],
  state => state.errorMessage
);