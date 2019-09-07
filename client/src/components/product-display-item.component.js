import React from 'react';
import { connect } from 'react-redux';

import { selectAddedToCart } from '../redux/cart/cart.selectors';
import { addItemToCart, toggleAddedToCart } from '../redux/cart/cart.actions';
import CustomButton from './custom-button.component';
import { limitString } from '../utils/helper';
import './product-display-item.styles.scss';

const ProductDisplayItem = ({ item, addItemToCart, addedToCart, toggleAddedToCart }) => {
  const { title, price, shipping, imageUrl } = item;

  const handleButtonClick = () => {
    toggleAddedToCart();
    addItemToCart(item);
    setTimeout(() => {
      toggleAddedToCart()
    }, 500);
  }

  return (
    <div className='product-display-item'>
      <div className='item-image-container'>
        <img className='item-image' src={imageUrl} alt='item' />
      </div>
      {
        addedToCart ?
          <CustomButton text='Added to cart!' buttonType='added-to-cart'></CustomButton>
          : <CustomButton text='Add to cart' buttonType='add-to-cart' onClick={handleButtonClick}></CustomButton>
      }
      <div className='item-info-list'>
        <div className='item-info-item title'>{limitString(title)}</div>
        <div className='item-info-item price'>${price}</div>
        <div className='item-info-item shipping'>{shipping}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  addedToCart: selectAddedToCart(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  toggleAddedToCart: () => dispatch(toggleAddedToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplayItem);