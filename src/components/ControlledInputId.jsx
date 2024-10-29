import { useState } from 'react';
import styled from 'styled-components';


function ControlledInputId() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    function emailValidChk(email) {
        return pattern.test(email);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <StyledInput
                type="email"
                value={inputValue}
                placeholder='아이디를 입력해주세요!'
                onChange={handleChange}
                onFocus={() => setIsFocused(true)} 
            />
            {isFocused && !emailValidChk(inputValue) && (
                <ErrorMessage>올바른 이메일 형식이 아닙니다. 다시 확인해주세요!</ErrorMessage>
            )}
        </div>
    );
}

export default ControlledInputId;

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
    font-size: 14px;
    margin-top: 5px;
`;
