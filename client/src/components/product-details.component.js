import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CustomButton from './custom-button.component';
import { convertPriceToString } from '../utils/helper';
import { addItemToCart, toggleAddedToCart } from '../redux/cart/cart.actions';
import { selectItemById } from '../redux/shop/shop.selectors';
import { selectAddedToCart } from '../redux/cart/cart.selectors'
import unavailable from '../assets/unavailable-image.jpg';

import './product-details.styles.scss';

const ProductDetails = ({ item, history, addItemToCart, toggleAddedToCart, addedToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handleButtonClick = () => {
    toggleAddedToCart();
    addItemToCart(item);
    setTimeout(() => {
      toggleAddedToCart()
    }, 300);
  }

  const {
    title = 'Loading',
    price = 'Loading',
    features = 'Loading',
    logo,
    imageUrlLarge = 'Loading',
  } = item;

  const { priceMain, priceSub } = convertPriceToString(price);

  return (
    <div className='product-details-page'>
      <div className='product-details'>
        <div className='product-image-container'>
          <img alt='product' src={imageUrlLarge || unavailable} className='product-image' />
        </div>
        <div className='product-info'>
          <h2 className='info-title'>{title}</h2>
          <div className='product-info-sections'>
            <div className='info-items'>
              <div className='info-logo-container'>
                {
                  logo ? <img alt='brand' src={logo} /> : null
                }
              </div>
              <div className='info-item features'>
                <ul>
                  {
                    features ? features.map((feature, i) => <li className='feature' key={i}>{feature}</li>)
                      : null
                  }
                </ul>
              </div>
              <div className='info-item actions'>
                {
                  addedToCart ? <CustomButton text='Added to cart!' buttonType='added-to-cart' />
                    : <CustomButton text='Add to cart' buttonType='add-to-cart' onClick={handleButtonClick} />
                }
                <CustomButton text='Continue Shopping' buttonType='go-to-home' onClick={() => history.goBack()} />
              </div>
            </div>
            <div className='item-price'>
              <span className='price-main'>${priceMain}</span>
              <span className='price-sub'>.{priceSub}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: selectItemById(ownProps.match.params.id)(state),
  addedToCart: selectAddedToCart(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  toggleAddedToCart: () => dispatch(toggleAddedToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);