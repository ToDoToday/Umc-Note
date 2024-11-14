// card-skeleton.style.js
import styled, { keyframes } from 'styled-components';

// 애니메이션 추가 (로딩 효과)
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-left:20px;
  margin-top:20px;
  
  `;
  const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    jusitfy-content:flex-start;
    margin-bottom:10px;
    flex-wrap: wrap;
  
`

const CardMain = styled.div`
  width: 120px;
  height: 190px;
  background: #333;
  background-image: linear-gradient(
    to right,
    #333 0%,
    #444 20%,
    #333 40%,
    #333 100%
  );
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 5px;
  margin-left: 0;
  margin-right: auto;
  overflow:hidden;
`;

const TextWrapper = styled.div`
  height:30px;
  width: 140px;
  margin-top: 10px;
  margin-top:5px;
  flex-direction:column;
`;

const TitleBox = styled.div`
  width: 80%;
  height: 12px;
  margin-top:5
  background: #333;
  background-image: linear-gradient(
    to right,
    #333 0%,
    #444 20%,
    #333 40%,
    #333 100%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 3px;
  margin-bottom: 8px;
`;

const DescriptionBox = styled.div`
  width: 60%;
  height: 8px;
  background: #333;
  background-image: linear-gradient(
    to right,
    #333 0%,
    #444 20%,
    #333 40%,
    #333 100%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 3px;
`;

export {CardWrapper, Container, CardMain, TextWrapper, TitleBox, DescriptionBox };
