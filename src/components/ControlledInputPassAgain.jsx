import { useState } from 'react';
import styled from 'styled-components';
// import ControlledInputPass from './ControlledInputPass';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
//   lengthOfinputValue=ControlledInputPass.inputValue
  return (
    <div>
      <StyledInput type="password" 
      value={inputValue} 
      onChange={handleChange} 
      placeholder='비밀번호를 다시 입력해주세요!'
      
      
      />




    </div>
  );
}

export default ControlledInput;


const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    font-size: 16px;

    &:focus {
        border-color: #66afe9;
        outline: none;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;
