import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { addItemToCart, removeItemFromCart, clearItemFromCart, updateItemQuantity } from '../redux/cart/cart.actions';

import { limitString } from '../utils/helper';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItemToCart, removeItemFromCart, clearItemFromCart, updateItemQuantity, history }) => {
  const { _id, imageUrl, title, price, quantity } = item;
  const [isSelectingQuantity, setIsSelectingQuantity] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const updateQuantity = event => {
    event.preventDefault();

    updateItemQuantity(_id, itemQuantity);

    setIsSelectingQuantity(false);
  }

  return (
    <div className='checkout-item'>
      <div className='item-info image' onClick={() => history.push(`/products/${_id}`)}>
        <div className='image-container'>
          <img alt='item' src={imageUrl} className='item-image' />
        </div>
      </div>
      <div className='item-info description' onClick={() => history.push(`/products/${_id}`)}>
        {limitString(title)}
      </div>
      <div className='item-info quantity'>

        {
          isSelectingQuantity ?
            <form onSubmit={updateQuantity}>
              <input className='quantity-input' value={isNaN(itemQuantity) ? '' : itemQuantity} onChange={e => setItemQuantity(parseInt(e.target.value))} />
              <button>Update</button>
            </form>
            :
            <>
              <span className='text-item reduce-quantity' onClick={() => { removeItemFromCart(item); setItemQuantity(itemQuantity - 1) }}>&#8882;</span>
              <span className='text-item' onClick={() => setIsSelectingQuantity(true)}>
                {itemQuantity}
              </span>
              <span className='text-item increase-quantity' onClick={() => { addItemToCart(item); setItemQuantity(itemQuantity + 1) }}>&#8883;</span>
            </>
        }
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
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  updateItemQuantity: (itemId, quantity) => dispatch(updateItemQuantity(itemId, quantity))
})

export default compose(
  connect(null, mapDispatchToProps),
  withRouter)(CheckoutItem);