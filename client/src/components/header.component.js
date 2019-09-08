import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoriesInfo } from '../redux/shop/shop.selectors';
import NavigationDropdown from './navigation-dropdown.component';
import CartIcon from './cart-icon.component';

import logo from '../assets/logo.png';
import './header.styles.scss';

const Header = ({ categories }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img className='logo' alt='logo' src={logo} />
      </Link>
      <div className='navigation-links'>
        <Link to='/' className='navigation-item home'>Home</Link>
        <div className='navigation-item shop'>
          <Link to='/' disabled className='shop-link'>Shop</Link>
          <NavigationDropdown categories={categories} />
        </div>
        <Link to='/contact' className='navigation-item contact'>Contact</Link>
        <Link to='/signin' className='navigation-item sign-in'>Sign In</Link>
        <Link to='/checkout'>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesInfo
})

export default withRouter(connect(mapStateToProps)(Header));