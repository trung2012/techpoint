import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { useAddToCart } from '../hooks/useAddToCart';
import { addItemToCart } from '../redux/cart/cart.actions';
import CustomButton from './custom-button.component';
import { limitString } from '../utils/helper';
import './product-display-item.styles.scss';

const ProductItem = ({ item, addItemToCart, history }) => {
  const { addedToCart, handleButtonClick } = useAddToCart({ addItemToCart }, item);

  const { _id, title, price, shipping, imageUrl } = item;

  return (
    <div className='product-display-item'>
      <div className='item-image-container' onClick={() => history.push(`/products/${_id}`)}>
        <img className='item-image' src={imageUrl} alt='item' />
      </div>
      {
        addedToCart ?
          <CustomButton text='Added to cart!' disabled buttonType='added-to-cart' />
          : <CustomButton text='Add to cart' buttonType='add-to-cart' onClick={handleButtonClick} />
      }
      <div className='item-info-list'>
        <div className='item-info-item title' onClick={() => history.push(`/products/${_id}`)}>{limitString(title)}</div>
        <div className='item-info-item price'>${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        <div className='item-info-item shipping'>{shipping}</div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

const ProductDisplayItem = compose(
  connect(null, mapDispatchToProps),
  withRouter)(ProductItem)

export default ProductDisplayItem;