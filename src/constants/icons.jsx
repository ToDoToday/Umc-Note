import styled from "styled-components";

// CartIcon 컴포넌트 수정 (SVG 아이콘을 스타일링)
export const CartIcon = () => {
  return (
    <CartSvg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </CartSvg>
  );
};

export const ChevronDown = () => {
  return (
    <ChevronSvg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </ChevronSvg>
  );
};

export const ChevronUp = () => {
  return (
    <ChevronSvg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </ChevronSvg>
  );
};

// 스타일 컴포넌트: 아이콘을 스타일링
const CartSvg = styled.svg`
  width: 50px;
  height: 50px;
`;

const ChevronSvg = styled.svg`
  width: 30px;  /* 아이콘 크기 */
  height: 30px;
  cursor: pointer; /* 클릭 가능하도록 설정 */
`;
