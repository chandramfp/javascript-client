import React from 'react';
import PropTypes from 'prop-types';

import Input from './style';

// day 5
// const TextField = (props) => {
//   const { value, disabled, error } = props;
//   return (
//     <Input type="text" value={value} disabled={(disabled)} error={error} />
//   );
// };

const TextField = (props) => {
  const { onChange, value, error } = props;
  // console.log('inside TextField',onChange, value, error);

  return (
    <Input type="text" onChange={onChange} value={value} error={error} />
  );
};

TextField.propTypes = {

  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  error: '',
};

export default TextField;
