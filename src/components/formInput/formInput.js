import React from 'react';
import './formInputStyles.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`formLabel ${otherProps.value.length ? 'shrink' : ''}`}
        >
          {label}
        </label>
      )}
      <input 
        className='formInput'
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

export default FormInput;