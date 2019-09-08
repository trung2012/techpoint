import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchShopData } from './redux/shop/shop.actions';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shoppage.component';
import Header from './components/header.component';
import CheckOut from './components/checkout.component';
import ProductDetails from './components/product-details.component';
import SignIn from './components/signin.component';
import ContactPage from './pages/contact.component';


import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchShopData();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exect path='/checkout' component={CheckOut} />
          <Route exect path='/contact' component={ContactPage} />
          <Route exect path='/signin' component={SignIn} />
          <Route path='/products/:id' component={ProductDetails} />
        </Switch>
      </div>
    );
  };
}

export default connect(null, { fetchShopData })(App);
