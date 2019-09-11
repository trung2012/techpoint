import React from 'react';
import { connect } from 'react-redux';

import { clearErrors } from '../redux/error/error.actions';
import { createStructuredSelector } from 'reselect';
import { selectCategoryItems, selectIsCategoriesLoading, selectShopError } from '../redux/shop/shop.selectors';
import ProductCategory from './product-category.component';
import Spinner from './spinner.component';

import './product-overview.styles.scss';

const ProductOverview = ({ categories, isLoading, shopError }) => {
  return (
    shopError ? <div className='error-display'>Something went wrong</div> :
      isLoading ? <Spinner /> :
        <div className='product-overview'>

          <h1 className='page-title'>Shop your favorite tech</h1>
          {categories ?
            categories.map(({ _id, ...otherProps }) => {
              return <ProductCategory key={_id} {...otherProps} i={5} />
            })
            : 'Loading'
          }
        </div>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoryItems,
  isLoading: selectIsCategoriesLoading,
  shopError: selectShopError
})

export default connect(mapStateToProps, { clearErrors })(ProductOverview);