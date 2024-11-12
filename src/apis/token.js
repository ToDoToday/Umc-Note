import axios from "axios";

// 토큰 재발급 요청
export const refreshToken = async (refreshToken) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/auth/token/access", 
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` } }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

