import React from 'react';
import PropTypes from 'prop-types';
import './customButtonStyles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    type="button"
    className={`customButton ${isGoogleSignIn ? 'googleSignIn' : ''} ${
      inverted ? 'inverted' : ''
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomButton;
