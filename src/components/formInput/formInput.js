import React from 'react'

import './formInput.scss'


const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      {
        label
          ? (
              <label 
                className={
                  `form-input-label 
                  ${otherProps.value.length ? 'shrink' : ''}
                `}
              >
                {label}
              </label>
            )
          : null
      }
      <input 
        className='form-input' 
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

export default FormInput
