import { useState } from 'react';
import styled from 'styled-components';



function ControlledInputPass() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false); 

    function passwordValidChk(password) {
        return password.length >= 8 && password.length <= 16; 
    } 

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <StyledInput 
                type="password" 
                value={inputValue} 
                placeholder='비밀번호를 입력해주세요!' 
                onChange={handleChange}  
                onBlur={() => setIsFocused(true)}
            />
            {isFocused && !passwordValidChk(inputValue) && ( 
                <ErrorMessage>비밀번호는 8 ~ 16자 사이로 입력해주세요!</ErrorMessage>
            )}
        </div>
    );
}

export default ControlledInputPass;

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
