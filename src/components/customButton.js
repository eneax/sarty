import React from 'react'

import { CustomButtonContainer } from './styles/customButtonStyles'


const CustomButton = ({ children, ...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton
