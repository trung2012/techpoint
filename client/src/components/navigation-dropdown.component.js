import React from 'react';

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

export default (NavigationDropdown);