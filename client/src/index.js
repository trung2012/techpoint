import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import history from './history';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
  , document.getElementById('root'));