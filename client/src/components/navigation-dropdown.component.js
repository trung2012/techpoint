import React from 'react';
import { connect } from 'react-redux';

import NavigationDropdownItem from './navigation-dropdown-item.component';
import './navigation-dropdown.styles.scss';

const NavigationDropdown = ({ categories }) => {
  return (
    <div className='navigation-dropdown'>
      {
        categories ?
          categories.map(({ _id, ...otherProps }) => {
            return <NavigationDropdownItem key={_id} {...otherProps} />
          })
          : null
      }
    </div>
  );
}


const mapStateToProps = state => ({
  categories: state.shopReducer.categories
})

export default connect(mapStateToProps)(NavigationDropdown);