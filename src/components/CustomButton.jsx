import styled from 'styled-components';

function CustomButton() {
    return (
        <StyledButton>로그인</StyledButton>
    );
}

export default CustomButton;


const StyledButton = styled.button`
    padding: 10px 20px;
    background-color:rgb(228, 68, 101);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    width:300px;
    &:hover {
        background-color: lightblue;
    }
`;