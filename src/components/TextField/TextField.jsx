import React from 'react';

import Input from './style';


const TextField = (props) => {
  const { value, disabled, error } = props;
  return (
    <Input type="text" value={value} disabled={(disabled)} error={error} />
  );
};

// const TextField = (props) => {
//   console.log('value::::::::::::::', props);
//   return <input type="text" value={props.value} />;
// };
export default TextField;
