import ReactDOM from "react-dom";  // 대소문자 수정
import { children } from "react";  // children으로 수정

const ModalPortal = ({ children }) => {
  if (typeof window === "undefined") {
    return null;  // 서버 사이드 렌더링에서 실행 방지
  }

  const portalElement = document.getElementById("portal"); // #portal 요소를 찾음
  if (!portalElement) {
    console.error("Portal DOM 요소가 없습니다. #portal을 추가하세요.");
    return null;
  }
  return ReactDOM.createPortal(children, portalElement);  // Portal을 사용해 children 렌더링
};

export default ModalPortal;
