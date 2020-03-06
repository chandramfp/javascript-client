import React from 'react';
import PropTypes from 'prop-types';

import Select from './style';

const SelectField = (props) => {
  // console.log('props inside SelectField', props);
  const {
    options, defaultText, onChange, Value, error,

  } = props;
  // console.log('inside selectField', defaultText);
  return (
    <>
      <Select value={Value} onChange={onChange}>
        {defaultText && <option>{defaultText}</option>}
        {
          options && options.length && options.map(({ value, label }) => (
            <option key={label} value={value}>{label}</option>
          ))
        }


      </Select>
      <p>{error}</p>
    </>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultText: PropTypes.string.isRequired,
  Value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  error: '',
};

export default SelectField;
