import React from 'react';
import { Route } from 'react-router-dom';
import ProductShop from '../components/product-shop.component';

const ShopPage = ({ match }) => {
  return (
    <Route path={`${match.path}/:category`} component={ProductShop} />
  );
}

export default ShopPage;