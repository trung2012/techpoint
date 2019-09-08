import React from 'react';
import ProductDisplayItem from './product-display-item.component';
import { withRouter } from 'react-router-dom';

import './product-category.styles.scss';

const ProductCategory = ({ name, items, i, history }) => {
  return (
    <div className='product-overview-category'>
      <div className='category-header'>
        <h2 className='category-title'>{name.toUpperCase()}</h2>
        <span className='category-subtitle' onClick={() => history.push(`/shop/${name}`)}>See all</span>
      </div>
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



export default withRouter(ProductCategory);