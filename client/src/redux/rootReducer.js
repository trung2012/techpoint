import { combineReducers } from 'redux';
import shopReducer from './shop/shop.reducer';
import errorReducer from './error/error.reducer';

const rootReducer = combineReducers({
  shopReducer,
  errorReducer
})

export default rootReducer;