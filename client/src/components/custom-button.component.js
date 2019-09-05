import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ type, text }) => {
  const className = type ? `custom-button ${type}` : 'custom-button'

  return (
    <button className={className}>{text}</button>
  );
}

export default CustomButton;