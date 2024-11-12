import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import useForm from '../hooks/use-form';
import { validateLogin } from "../utils/vaildate";
// contextapi활용
const LoginPage = () => {
    const navigate = useNavigate();

    const login = useForm({
        initialValue: {
            email: '',
            password: ''
        },
        validate: validateLogin
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            // 로그인 요청
            const response = await axios.post("http://localhost:3000/auth/login", {
                email: login.values.email,
                password: login.values.password
            });

            // 로그인 성공 시, 토큰 저장
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            // localStorage.setItem('UserName',user.name) 참고할것

            // 메인 페이지로 리디렉션
            alert('ㅇㅇ')
            navigate('/');

        } catch (error) {
            console.error("로그인 실패", error.response?.data || error.message);
            alert('ㄴㄴ')
        }
    };

    return (
        <Background>
            <CustomContainer>
                <CustomH1>로그인</CustomH1>
                <CustomForm onSubmit={onSubmit}>
                    <StyledInput 
                        type="email" 
                        placeholder="이메일을 입력해주세요!"
                        {...login.getTextInputProps('email')} 
                    />
                    {login.touched?.email && login.errors?.email && (
                        <ErrorText>{login.errors.email}</ErrorText>
                    )}

                    <StyledInput 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요!"
                        {...login.getTextInputProps('password')} 
                    />
                    {login.touched?.password && login.errors?.password && (
                        <ErrorText>{login.errors.password}</ErrorText>
                    )}

                    <CustomButton type="submit">로그인</CustomButton>
                </CustomForm>
            </CustomContainer>
        </Background>
    );
};

export default LoginPage;

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

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
    align-items: center;
    gap: 10px;
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
