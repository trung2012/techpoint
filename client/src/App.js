import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/categories')
      .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className='App'>
        TechPoint
      </div>
    );
  };
}

export default App;
