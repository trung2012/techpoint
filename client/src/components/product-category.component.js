import React from 'react';
import ProductDisplayItem from './product-display-item.component';

import './product-category.styles.scss';

const ProductCategory = ({ name, items, i }) => {
  return (
    <div className='product-overview-category'>
      <h2 className='category-title'>{name.toUpperCase()}</h2>
      <div className='category-list'>
        {
          items
            .filter((item, index) => index < i)
            .map(item => {
              return <ProductDisplayItem key={item._id} item={item} />
            })
        }
      </div>
    </div>
  );
}



export default ProductCategory;