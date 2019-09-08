import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from './shop/shop.reducer';
import errorReducer from './error/error.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
  shopReducer,
  cartReducer,
  errorReducer
})

export default persistReducer(persistConfig, rootReducer);