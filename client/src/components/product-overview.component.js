import React from 'react';

import { connect } from 'react-redux';
import { fetchShopData } from '../redux/shop/shop.actions';
import ProductOverviewCategory from './product-overview-category.component';
import './product-overview.styles.scss';

class ProductOverview extends React.Component {
  componentDidMount() {
    this.props.fetchShopData();
  }

  render() {
    const { categories, isLoading } = this.props;
    return (
      isLoading ? null :
        <div className='product-overview'>
          <h1 className='page-title'>Shop your favorite tech</h1>
          {categories ?
            categories.map(({ _id, ...otherProps }) => {
              return <ProductOverviewCategory key={_id} {...otherProps} />
            })
            : 'Loading'
          }
        </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.shopReducer.categoriesData,
  isLoading: state.shopReducer.isLoading
})

export default connect(mapStateToProps, { fetchShopData })(ProductOverview);