import React from 'react';
import { Para, DivWrapper, TextField } from '../../components/index';


const TextFieldDemo = () => (
  <DivWrapper>
    <p><b>This is a Disabled Input</b></p>
    <TextField value="Disabled input" disabled />
    <p><b>A Valid Input</b></p>
    <TextField value="Accessible" />
    <p><b>An Input with errors </b></p>
    <TextField value="101" error />
    <Para>Could not be greater than</Para>
  </DivWrapper>
);

export default TextFieldDemo;
