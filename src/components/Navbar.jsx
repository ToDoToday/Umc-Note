import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState(null);
  const navigate = useNavigate();

  // 로그인 상태 확인 및 유저 정보 불러오기
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // 로그인 상태일 때 유저 정보 불러오기
      setIsLoggedIn(true);
      console.log("로그인 상태로 변경됨");
      fetchUserInfo();
    } else {
      setIsLoggedIn(false);
      console.log("로그인 상태 아님");
    }
  }, []); 

// useMutation 훅을 통해 유저 정보 불러오기
const { mutate, isLoading, error } = useMutation({
  mutationFn: async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) throw new Error("No access token");

    const response = await axios.get("http://localhost:3000/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  },
  onSuccess: (data) => {
    const email = data.email;
    const nickname = email.split('@')[0]; // 이메일 앞부분 추출
    setUserNickname(nickname);
    console.log("유저 정보 불러오기 성공:", nickname);
  },
  onError: (error) => {
    console.error("유저 정보를 불러오는 데 실패했습니다.", error);
  },
});

  // 유저 정보 요청을 트리거하는 함수
  const fetchUserInfo = () => {
    mutate(); // mutate를 호출하여 API 요청 실행
  };

  // 로그아웃
  const handleLogout = () => {
    // 로컬 스토리지에서 로그인 관련 정보 삭제
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // 상태 업데이트
    setIsLoggedIn(false);
    setUserNickname(null);

    // 상태 업데이트 확인
    console.log("로그아웃 상태로 변경됨");

    // 로그인 페이지로 리디렉션
    navigate("/login");
  };

  return (
    <Customnav>
      <Customspan2>
        <Link style={{ fontWeight: '700', fontSize: "25px", color: 'rgb(230, 51, 90)' }} to={'/'}>YONGCHA</Link>
      </Customspan2>

      <CustomSpan>
        {isLoggedIn ? (
          <>
            <span style={{ color: 'white', marginRight: '10px' }}>{userNickname}님 반갑습니다.</span>
            <CustomLink onClick={handleLogout} style={{ color: 'white' }}>로그아웃</CustomLink>
          </>
        ) : (
          <>
            <CustomLink style={{ color: 'white' }} to={'/signup'}>회원가입</CustomLink>
            <CustomLink style={{ color: 'white' }} to={'/login'}>로그인</CustomLink>
          </>
        )}
      </CustomSpan>
    </Customnav>
  );
};

export default Navbar;

const Customnav = styled.nav`
  background-color: rgb(20, 21, 23);
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 50px;
`;

const Customspan2 = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-top: 13px;
  margin-left: 10px;
`;

const CustomSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  float: right;
  margin-top: 15px;
  a {
    margin-left: 10px;
    margin-right: 10px;
  }

  border-radius: 5px;
`;

const CustomLink = styled(Link)`
  &:hover {
    background-color: rgb(228, 68, 101);
    border-radius: 5px;
  };
`;
