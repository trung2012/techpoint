import React from 'react';
import { withRouter } from 'react-router-dom';

import './navigation-dropdown-item.styles.scss';

const NavigationDropdownItem = ({ name, imageUrl, history }) => {

  return (
    <div className='navigation-dropdown-item' onClick={() => history.push(`/shop/${name}`)}>
      <div className='image-container'>
        <img alt='category' src={imageUrl} className='category-image' />
      </div>
      <h3 className='category-title'>{name}</h3>
    </div>
  );
}


export default withRouter(NavigationDropdownItem);