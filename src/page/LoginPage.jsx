import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import useForm from '../hooks/use-form';
import { validateLogin } from "../utils/vaildate";
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../App';
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

    // const onSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         // 로그인 요청
    //         const response = await axios.post("http://localhost:3000/auth/login", {
    //             email: login.values.email,
    //             password: login.values.password
    //         });

    //         // 로그인 성공 시, 토큰 저장
    //         const { accessToken, refreshToken } = response.data;
    //         localStorage.setItem('accessToken', accessToken);
    //         localStorage.setItem('refreshToken', refreshToken);
    //         // localStorage.setItem('UserName',user.name) 참고할것

    //         // 메인 페이지로 리디렉션
    //         alert('ㅇㅇ')
    //         navigate('/');

    //     } catch (error) {
    //         console.error("로그인 실패", error.response?.data || error.message);
    //         alert('ㄴㄴ')
    //     }
    // };
    const loginMutation = useMutation(
        {mutationFn: async ({ email, password }) => {
                const response = await axios.post("http://localhost:3000/auth/login", {
                  email,
                  password,
                });
                return response.data; // 서버에서 반환된 데이터 반환
              },
          onSuccess: (data) => {
            // 성공 시 토큰 저장 및 리디렉션
            const { accessToken, refreshToken } = data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
    
            alert("로그인 성공!");
            navigate("/"); // 메인 페이지로 이동
            queryClient.refetchQueries(['login']);
          },
          onError: (error) => {
            // 실패 시 오류 처리
            console.error("로그인 실패", error.response?.data || error.message);
            alert("로그인 실패!");
            
          },
        }
      );

      
    const onSubmit = (event) => {
        event.preventDefault();
    
        // `useMutation`을 사용하여 요청 트리거
        loginMutation.mutate({
          email: login.values.email,
          password: login.values.password,
        });
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
