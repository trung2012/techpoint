import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CustomButton from './custom-button.component';
import { convertPriceToString, convertFeatureToSubstrings } from '../utils/helper';
import { addItemToCart } from '../redux/cart/cart.actions';
import { useAddToCart } from '../hooks/useAddToCart';
import { selectItemById } from '../redux/shop/shop.selectors';
import unavailable from '../assets/unavailable-image.jpg';

import './product-details.styles.scss';

const ProductDetails = ({ item, history, addItemToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { addedToCart, handleButtonClick } = useAddToCart({ addItemToCart }, item);

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
                    features ?
                      features.map((feature, i) => {
                        const { featureName, featureDescription } = convertFeatureToSubstrings(feature);
                        return (
                          <li className='feature' key={i}>
                            <strong className='feature-name'>{featureName}:</strong>
                            <span>{featureDescription}</span>
                          </li>)
                      })
                      : null
                  }
                </ul>
              </div>
            </div>
            <div className='item-price'>
              <span className='price-main'>${priceMain}</span>
              <span className='price-sub'>.{priceSub}</span>
            </div>
          </div>
          <div className='actions'>
            {
              addedToCart ? <CustomButton text='Added to cart!' buttonType='added-to-cart' />
                : <CustomButton text='Add to cart' buttonType='add-to-cart' onClick={handleButtonClick} />
            }
            <CustomButton text='Back' buttonType='go-to-home' onClick={() => history.goBack()} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: selectItemById(ownProps.match.params.id)(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);