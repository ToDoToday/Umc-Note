import styled from "styled-components"
import ControlledInputId from "../components/ControlledInputId"
import ControlledInputPass from "../components/ControlledInputPass"
import CustomButton from "../components/CustomButton"
const LoginPage = ()=>{
    return (
        <Background>
            <CustomH1>로그인 페이지</CustomH1>
            <ControlledInputId>아이디</ControlledInputId>
            <ControlledInputPass>비밀번호</ControlledInputPass>
            <CustomButton></CustomButton>

            
        </Background>
    )
}

export default LoginPage

const Background = styled.div`
    margin-left: 200px;
    margin-top:50px;
    background-color:black;
    height:100vh;

`
const CustomH1 = styled.h1`
    color: white;
    margin:0;
    margin-top:10px;
    margin-left:10px;
`