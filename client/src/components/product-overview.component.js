import React from 'react';

import ProductOverviewCategory from './product-overview-category.component';
import './product-overview.styles.scss';

const ProductOverview = () => {
  return (
    <div className='product-overview'>
      <ProductOverviewCategory />
    </div>
  )
}

export default ProductOverview;