import React from 'react'

import './button.scss'

const Button = ({ children, ...otherProps }) => (
  <button 
    className='custom-button' 
    {...otherProps} 
  >
    {children}
  </button>
)

export default Button
