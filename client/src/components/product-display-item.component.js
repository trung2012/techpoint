import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectAddedToCart } from '../redux/cart/cart.selectors';
import { addItemToCart, toggleAddedToCart } from '../redux/cart/cart.actions';
import CustomButton from './custom-button.component';
import { limitString } from '../utils/helper';
import './product-display-item.styles.scss';

const ProductItem = ({ item, addItemToCart, addedToCart, toggleAddedToCart, history }) => {
  const { _id, title, price, shipping, imageUrl } = item;

  const handleButtonClick = () => {
    toggleAddedToCart();
    addItemToCart(item);
    setTimeout(() => {
      toggleAddedToCart()
    }, 400);
  }

  return (
    <div className='product-display-item'>
      <div className='item-image-container' onClick={() => history.push(`/products/${_id}`)}>
        <img className='item-image' src={imageUrl} alt='item' />
      </div>
      {
        addedToCart ?
          <CustomButton text='Added to cart!' buttonType='added-to-cart' />
          : <CustomButton text='Add to cart' buttonType='add-to-cart' onClick={handleButtonClick} />
      }
      <div className='item-info-list'>
        <div className='item-info-item title' onClick={() => history.push(`/products/${_id}`)}>{limitString(title)}</div>
        <div className='item-info-item price'>${price.toFixed(2)}</div>
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

const ProductDisplayItem = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(ProductItem)

export default ProductDisplayItem;