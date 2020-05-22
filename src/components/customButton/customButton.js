import React from 'react';
import PropTypes from 'prop-types';
import './customButtonStyles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    type="button"
    className={`customButton ${isGoogleSignIn ? 'googleSignIn' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
};

export default CustomButton;
