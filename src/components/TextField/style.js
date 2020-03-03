import styled, { css } from 'styled-components';

const Input = styled.input`
${(props) => props.value === 'Disabled input'
    && css`
     width: 100%
    `};
    ${(props) => props.value === 'Accessible'
    && css`
     width: 100%
    `};
    ${(props) => props.value > 100
    && css`
     width: 100%;
     border-color: red;
    `};
`;

const Para = styled.p`
color: red;
`;

const DivWrapper = styled.div`
border: 1px solid black;
padding: 6px;
`;

export { Para, DivWrapper };
export default Input;
