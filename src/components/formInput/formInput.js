import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './formInputStyles';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <GroupContainer>
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    <FormInputContainer onChange={handleChange} {...otherProps} />
  </GroupContainer>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormInput;
