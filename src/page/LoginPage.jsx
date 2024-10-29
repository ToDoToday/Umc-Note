import styled from "styled-components";
import ControlledInputId from "../components/ControlledInputId";
import ControlledInputPass from "../components/ControlledInputPass";
import CustomButton from "../components/CustomButton";

const LoginPage = () => {
    return (
        <Background>
            <CustomContainer>
                <CustomH1>로그인</CustomH1>
                <ControlledInputId>아이디</ControlledInputId>
                <ControlledInputPass>비밀번호</ControlledInputPass>
                <CustomButton />
            </CustomContainer>
        </Background>
    );
}

export default LoginPage;

const Background = styled.div`
    margin-left: 200px;
    margin-top: 50px;
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;  
    align-items: center;    
`;

const CustomH1 = styled.h1`
    width:100%;
    text-align:center;
    color: white;

`;

const CustomContainer = styled.div`
    display: flex;
    flex-direction: column;   
    gap: 20px;             
    align-items: flex-start; 
    margin-bottom:200px;
`;
