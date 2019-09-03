import React from 'react';

import ProductOverviewItem from './product-overview-item.component';

const ProductOverviewCategory = () => {
  return (
    <div className='product-overview-category'>
      <h2>Category Name</h2>
      <ProductOverviewItem />
    </div>
  )
}

export default ProductOverviewCategory;