import React from 'react';
import './customButtonStyles.scss';

const CustomButton = ({ children, isGoogleSignIn , ...otherProps }) => {
  return (
    <button 
      className={`customButton ${isGoogleSignIn ? 'googleSignIn' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton;