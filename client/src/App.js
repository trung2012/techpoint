import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchShopData } from './redux/shop/shop.actions';
import { loadUser } from './redux/user/user.actions';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shoppage.component';
import Header from './components/header.component';
import CheckOut from './components/checkout.component';
import ProductDetails from './components/product-details.component';
import SignIn from './components/signin.component';
import SignUp from './components/signup.component';
import ContactPage from './pages/contact.component';


import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchShopData();
    this.props.loadUser();
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
          <Route exect path='/signup' component={SignUp} />
          <Route path='/products/:id' component={ProductDetails} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  };
}

export default connect(null, { fetchShopData, loadUser })(App);
