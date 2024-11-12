import axios from "axios";

// 로그인 API 요청
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/login", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 회원가입 API 요청
export const registerUser = async (email, password, passwordCheck) => {
    try {
        const response = await axios.post("http://localhost:3000/auth/register", {
            email,
            password,
            passwordCheck,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
// refreshToken을 이용한 AccessToken 재발급
export const refreshToken = async (refreshToken) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/auth/token/access", 
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
        return response.data; // 새로운 accessToken
    } catch (error) {
        throw error;
    }
};