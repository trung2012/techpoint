import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};

const middleware = [thunk];

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, enhancedCompose(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };