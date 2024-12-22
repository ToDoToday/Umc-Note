// import { useState } from "react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // `useQuery`를 사용하여 사용자 정보를 불러오기
//   const { data: user, error } = useQuery(
//     "userData",
//     async () => {
//       const accessToken = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 가져오기
//       if (!accessToken) throw new Error("No access token");

//       const response = await axios.get("http://localhost:3000/user/me", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`, // 토큰을 Authorization 헤더에 담아 요청
//         },
//       });
//       return response.data; // 사용자 정보 반환
//     },
//     {
//       onSuccess: () => {
//         setIsAuthenticated(true); // 데이터 로드 성공 시 인증 상태 true로 변경
//       },
//       onError: () => {
//         setIsAuthenticated(false); // 오류 발생 시 인증 상태 false로 변경
//       },
//       retry: false, // 인증 실패 시 자동 재시도 방지
//     }
//   );

//   return { isAuthenticated, user, error };
// };

// export default useAuth;
