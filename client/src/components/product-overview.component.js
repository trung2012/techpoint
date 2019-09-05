import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCategoryItems, selectIsCategoriesLoading } from '../redux/shop/shop.selectors';
import ProductCategory from './product-category.component';

import './product-overview.styles.scss';

class ProductOverview extends React.Component {

  render() {
    const { categories, isLoading } = this.props;
    return (
      isLoading ? null :
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
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoryItems,
  isLoading: selectIsCategoriesLoading
})

export default connect(mapStateToProps)(ProductOverview);