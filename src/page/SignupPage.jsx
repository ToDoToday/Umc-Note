import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateSignup } from "../utils/vaildate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const SignupPage = () => {
  const navigate = useNavigate();

  const signup = useForm({
    initialValue: {
      email: "",
      password: "",
      PasswordCheck: "",
    },
    validate: validateSignup, // 가입 유효성 검사 함수
  });

  // 회원가입 API 요청을 useMutation으로 처리
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post("http://localhost:3000/auth/register", {
        email: formData.email,
        password: formData.password,
        passwordCheck: formData.PasswordCheck,
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("회원가입 성공:", data);
      alert("회원가입이 성공적으로 완료되었습니다!");
      navigate("/login"); // 성공 시 로그인 페이지로 이동
    },
    onError: (error) => {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();

    // useMutation을 사용해 회원가입 요청
    mutation.mutate({
      email: signup.values.email,
      password: signup.values.password,
      PasswordCheck: signup.values.PasswordCheck,
    });
  };

  return (
    <Background>
      <CustomContainer>
        <CustomH1>회원가입</CustomH1>
        <CustomForm onSubmit={onSubmit}>
          <StyledInput
            type={"email"}
            placeholder={"이메일을 입력해주세요!"}
            {...signup.getTextInputProps("email")}
          />
          {signup.touched.email && signup.errors.email && (
            <ErrorText>{signup.errors.email}</ErrorText>
          )}

          <StyledInput
            type={"password"}
            placeholder={"비밀번호를 입력해주세요!"}
            {...signup.getTextInputProps("password")}
          />
          {signup.touched.password && signup.errors.password && (
            <ErrorText>{signup.errors.password}</ErrorText>
          )}

          <StyledInput
            type={"password"}
            placeholder={"비밀번호를 다시 입력해주세요!"}
            {...signup.getTextInputProps("PasswordCheck")}
          />
          {signup.touched.PasswordCheck && signup.errors.PasswordCheck && (
            <ErrorText>{signup.errors.PasswordCheck}</ErrorText>
          )}

          <CustomButton type="submit">
            {mutation.isLoading ? "처리 중..." : "제출"}
          </CustomButton>
        </CustomForm>
      </CustomContainer>
    </Background>
  );
};

export default SignupPage;

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
  margin-bottom: 10px;
`;

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
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
