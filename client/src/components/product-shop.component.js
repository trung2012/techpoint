import React from 'react';
import { connect } from 'react-redux';
import { selectCategory, selectIsCategoriesLoading } from '../redux/shop/shop.selectors';
import ProductDisplayItem from './product-display-item.component';

import './product-shop.styles.scss';

const ProductShop = ({ match, category }) => {
  return (
    category ?
      <div className='product-shop'>
        <h1 className='shop-title'>{category.name}</h1>
        <div className='product-list'>
          {
            category.items.map(item => {
              return <ProductDisplayItem key={item._id} item={item} />
            })
          }
        </div>
      </div>
      : null
  );
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.category)(state),
  isLoading: selectIsCategoriesLoading(state)
})


export default connect(mapStateToProps)(ProductShop);