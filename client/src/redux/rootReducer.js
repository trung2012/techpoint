import { combineReducers } from 'redux';
import shopReducer from './shop/shop.reducer';
import errorReducer from './error/error.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  shopReducer,
  cartReducer,
  errorReducer
})

export default rootReducer;