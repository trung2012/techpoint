import React from 'react';
import ProductOverviewItem from './product-overview-item.component';

import './product-overview-category.styles.scss';

const ProductOverviewCategory = ({ name, items }) => {
  return (
    <div className='product-overview-category'>
      <h2 className='category-title'>{name.toUpperCase()}</h2>
      <div className='category-list'>
        {
          items
            .filter((item, index) => index < 5)
            .map(item => {
              return <ProductOverviewItem key={item._id} item={item} />
            })
        }
      </div>
    </div>
  );
}



export default ProductOverviewCategory;