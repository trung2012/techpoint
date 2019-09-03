import React from 'react';
import axios from 'axios';
import ProductOverview from '../components/product-overview.component';

class HomePage extends React.Component {
  componentDidMount() {
    axios.get('/api/categories')
      .then(res => console.log(res.data))
  }
  render() {
    return (
      <ProductOverview />
    )
  }
}

export default HomePage;