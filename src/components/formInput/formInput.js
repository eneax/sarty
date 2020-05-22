import React from 'react';
import PropTypes from 'prop-types';

import './formInputStyles.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    {label && (
      <label className={`formLabel ${otherProps.value.length ? 'shrink' : ''}`}>
        {label}
      </label>
    )}
    <input className="formInput" onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormInput;
