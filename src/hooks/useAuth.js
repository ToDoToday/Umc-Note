import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 로그인된 사용자 정보 불러오기
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 가져오기
      if (accessToken) {
        try {
          const response = await axios.get("/api/user", {
            headers: {
              Authorization: `Bearer ${accessToken}`, // 토큰을 Authorization 헤더에 담아 요청
            },
          });
          setUser(response.data);  // 사용자 정보를 상태에 저장
          setIsAuthenticated(true); // 인증 상태를 true로 변경
        } catch (error) {
          setError("사용자 정보를 불러오는 데 실패했습니다.");
          setIsAuthenticated(false); // 오류 발생 시 인증 상태 false
        }
      } else {
        setIsAuthenticated(false); // 토큰이 없으면 인증되지 않은 상태로 설정
      }
    };

    fetchUserData();
  }, []);

  return { isAuthenticated, user, setIsAuthenticated };
};

export default useAuth;
