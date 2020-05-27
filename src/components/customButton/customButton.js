import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './customButtonStyles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer type="button" {...props}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomButton;
