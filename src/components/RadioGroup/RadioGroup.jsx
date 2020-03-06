import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  // console.log('inside RadioGroup', props);
  const {
    options, onChange, error,
  } = props;
  return (
    <>
      {
        options && options.length && options.map(({ value, label }) => (
          <Fragment key={label}>
            <input type="radio" name="RadioButton" value={value} onChange={onChange} />
            {label}
            <br />
          </Fragment>
        ))
      }
      <p>{error}</p>
    </>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  error: '',
};

export default RadioGroup;
