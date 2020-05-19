import React from 'react';
import './customButtonStyles.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='customButton' {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;