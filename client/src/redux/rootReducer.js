import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import navigationReducer from './navigation/navigation.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer', 'shopReducer']
}

const rootReducer = combineReducers({
  shopReducer,
  cartReducer,
  userReducer,
  navigationReducer
})

export default persistReducer(persistConfig, rootReducer);