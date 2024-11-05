import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateSignup } from "../utils/vaildate";

const SignupPage = () => {
    const signup = useForm({
        initialValue: {
            email: '',
            password: '',
            PasswordCheck: ''
        },
        validate: validateSignup // 가입 유효성 검사 함수
    });

    return (
        <Background>
            <CustomContainer>
                <CustomH1>회원가입</CustomH1>
                <StyledInput type={'email'} placeholder={'이메일을 입력해주세요!'} {...signup.getTextInputProps('email')} />
                {signup.touched.email && signup.errors.email && <ErrorText>{signup.errors.email}</ErrorText>}
                
                <StyledInput type={'password'} placeholder={'비밀번호를 입력해주세요!'} {...signup.getTextInputProps('password')} />
                {signup.touched.password && signup.errors.password && <ErrorText>{signup.errors.password}</ErrorText>}
                
                <StyledInput type={'password'} placeholder={'비밀번호를 다시 입력해주세요!'} {...signup.getTextInputProps('PasswordCheck')} />
                {signup.touched.PasswordCheck && signup.errors.PasswordCheck && <ErrorText>{signup.errors.PasswordCheck}</ErrorText>}
                
                <CustomButton>제출</CustomButton>
            </CustomContainer>
        </Background>
    );
};

export default SignupPage;

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
    gap: 10px;             
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
    color: red;
    font-size: 12px;
`;
