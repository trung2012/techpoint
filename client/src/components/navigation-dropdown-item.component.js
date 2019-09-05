import React from 'react';

import './navigation-dropdown-item.styles.scss';

const NavigationDropdownItem = ({ name, imageUrl }) => {

  return (
    <div className='navigation-dropdown-item'>
      <div className='image-container'>
        <img alt='category' src={imageUrl} />
      </div>
      <h3 className='category-title'>{name}</h3>
    </div>
  );
}


export default NavigationDropdownItem;