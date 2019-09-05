import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationDropdown from './navigation-dropdown.component';
import logo from '../assets/logo.png';
import './header.styles.scss';

const Header = ({ match, history }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img alt='logo' src={logo} />
        <span>TechPoint</span>
      </div>
      <div className='navigation-links'>
        <div className='navigation-item shop'>
          <Link>Shop</Link>
          <NavigationDropdown />
        </div>
        <Link className='navigation-item contact'>Contact</Link>
        <Link className='navigation-item sign-in'>Sign In</Link>
      </div>
    </div>
  );
}

export default withRouter(Header);