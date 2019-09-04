import React from 'react';

import { limitString } from '../utils/helper';
import './product-overview-item.styles.scss';

const ProductOverviewItem = ({ item }) => {
  const { title, price, shipping, imageUrl } = item;

  return (
    <div className='product-overview-item'>
      <div className='item-image-container'>
        <img className='item-image' src={imageUrl} alt='item' />
      </div>
      <div className='item-info-list'>
        <div className='item-info-item title'>{limitString(title)}</div>
        <div className='item-info-item price'>${price}</div>
        <div className='item-info-item shipping'>{shipping}</div>
      </div>
    </div>
  )
}

export default ProductOverviewItem;