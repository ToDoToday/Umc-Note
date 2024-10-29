import styled from "styled-components"


const SignupPage = ()=>{
    return(
        <Background>
            <CustomH1 >회원가입 페이지</CustomH1>
        </Background>
    )
}

export default SignupPage


const Background = styled.div`
    background-color:black;
    margin-top:50px;
    height:100vh;
    margin-left: 200px;

`
const CustomH1 = styled.h1`
    color: white;
    margin:0;
    margin-top:10px;
    margin-left:10px;
`
