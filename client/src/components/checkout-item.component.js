import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../redux/cart/cart.actions';

import { limitString } from '../utils/helper';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItemToCart, removeItemFromCart, clearItemFromCart }) => {
  const { imageUrl, title, price, quantity } = item;

  return (
    <div className='checkout-item'>
      <div className='item-info image'>
        <div className='image-container'>
          <img alt='item' src={imageUrl} className='item-image' />
        </div>
      </div>
      <div className='item-info description'>
        {limitString(title)}
      </div>
      <div className='item-info quantity'>
        <span className='text-item reduce-quantity' onClick={() => removeItemFromCart(item)}>&#9664;</span>
        <span className='text-item'>{quantity}</span>
        <span className='text-item increase-quantity' onClick={() => addItemToCart(item)}>&#9658;</span>
      </div>
      <div className='item-info price'>
        ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </div>
      <div className='item-info remove' onClick={() => clearItemFromCart(item)}>&#10005;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);