import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';
import Header from './components/header.component';

import './App.css';
class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/header' component={Header} />
        </Switch>
      </div>
    );
  };
}

export default App;
