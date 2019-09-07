import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartQuantity } from '../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ cartQuantity }) => {
  return (
    <div className='cart-icon'>
      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <circle className='shopping-icon' cx="8" cy="21" fill="none" r="2" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle className='shopping-icon' cx="20" cy="21" fill="none" r="2" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path className='shopping-icon' d="M5.67,6H23l-1.68,8.39a2,2,0,0,1-2,1.61H8.75a2,2,0,0,1-2-1.74L5.23,2.74A2,2,0,0,0,3.25,1H1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
      {
        cartQuantity > 0 ? <span className='item-count'>{cartQuantity}</span> : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartQuantity: selectCartQuantity
})

export default connect(mapStateToProps)(CartIcon);