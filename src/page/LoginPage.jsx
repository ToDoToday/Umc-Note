import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/vaildate";
const LoginPage = () => {
    const login =useForm({
        initialValue:{
            email:'',
            password:''
        },
        validate:validateLogin
    })

    return (
        <Background>
            <CustomContainer>
                <CustomH1>로그인</CustomH1>
                <StyledInput type={'email'} placeholder={'이메일을 입력해주세요!'} {...login.getTextInputProps('email')}/>
                {login.touched.email&&login.errors.email&&<ErrorText>{login.errors.email}</ErrorText>}
                <StyledInput type={'password'} placeholder={'비밀번호을 입력해주세요!'} {...login.getTextInputProps('password')}/>
                {login.touched.password&&login.errors.password&&<ErrorText>{login.errors.password}</ErrorText>}
                <CustomButton>로그인</CustomButton>
            </CustomContainer>
        </Background>
    );
};

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
    width: 100%;
    text-align: center;
    color: white;
`;

const CustomContainer = styled.div`
    display: flex;
    flex-direction: column;   
    gap: 20px;             
    align-items: flex-start; 
    margin-bottom: 200px;
`;

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


const ErrorText = styled.h1`
    color:red;
    font-size:12px;
`