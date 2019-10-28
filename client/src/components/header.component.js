import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOut } from '../redux/user/user.actions';
import { toggleDropDown } from '../redux/navigation/navigation.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectCategoriesInfo } from '../redux/shop/shop.selectors';
import { selectIsNavigationDropdownHidden } from '../redux/navigation/navigation.selectors';
import NavigationDropdown from './navigation-dropdown.component';
import CartIcon from './cart-icon.component';

import logo from '../assets/logo.png';
import './header.styles.scss';

const Header = ({ categories, currentUser, signOut, isDropdownHidden, toggleDropDown }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img className='logo' alt='logo' src={logo} />
      </Link>
      <div className='navigation-links'>
        <Link to='/' className='navigation-item home'>Home</Link>
        <div className='navigation-item shop' onClick={toggleDropDown}>
          <Link to='/' disabled className='shop-link'>Shop</Link>
          {
            isDropdownHidden ? null : <NavigationDropdown categories={categories} toggleDropDown={toggleDropDown} />
          }
        </div>
        <Link to='/contact' className='navigation-item contact'>Contact</Link>
        {
          currentUser ?
            <div className='navigation-item signed-in'>
              <div className='welcome-message'>
                Hello, {currentUser.name}
              </div>
              <div className='sign-out' onClick={() => signOut()}>Sign Out</div>
            </div>
            : <Link to='/signin' className='navigation-item sign-in'>Sign In</Link>
        }
        <Link className='navigation-item cart' to='/checkout'>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesInfo,
  currentUser: selectCurrentUser,
  isDropdownHidden: selectIsNavigationDropdownHidden
})

export default withRouter(connect(mapStateToProps, { signOut, toggleDropDown })(Header));