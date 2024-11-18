import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardListSkeleton from '../components/card/card-list-skeleton';
import { ClipLoader } from 'react-spinners';
import { usePagination } from '../hooks/Queries/usePagination';

const NowPlaying = () => {
  const navigate = useNavigate();
  
  const { data, isLoading, isError, page, handlePageChange } = usePagination('now_playing');

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <CustomUl>
        {isLoading ? (
          <CardListSkeleton number={20} />
        ) : isError ? (
          <CustomP>영화 정보를 가져오는 데 오류가 발생했습니다.</CustomP>
        ) : (
          data?.results?.map((movie) => (
            <CustomLi key={movie.id}>
              <Customdiv2 onClick={() => handleMovieClick(movie.id)}>
                <CustomImg src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                <CustomP fontSize="8.5px" fontWeight="700">{movie.title}</CustomP>
                <CustomP fontSize="7px">{movie.release_date}</CustomP>
              </Customdiv2>
            </CustomLi>
          ))
        )}
      </CustomUl>

      {/* 페이지네이션 버튼 */}
      <PaginationContainer>
        <StyledButton
          onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        >
          이전
        </StyledButton>
        <span>{page} 페이지</span>
        <StyledButton
          onClick={() => handlePageChange(page + 1)}
        >
          다음
        </StyledButton>
      </PaginationContainer>

      {isLoading && <ClipLoader color="white" />}
    </>
  );
};

export default NowPlaying;



// 스타일 컴포넌트 정의

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: ${(props) => (props.disabled ? 'gray' : 'rgb(228, 68, 101)')};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s;
    width: 60px;
    &:hover {
        background-color: ${(props) => (props.disabled ? 'gray' : 'lightblue')};
    }
`;
const CustomP = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize || 'normal'};
  color: white;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  width: 100px;
  height: 10px;
  text-align: left;
`;

const CustomUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin-left: 220px;
  margin-top: 50px;
  background-color: black;
`;

const Customdiv2 = styled.div`
  margin-top: 20px;

  cursor: pointer;
`;

const CustomLi = styled.li`
  list-style: none;
  width:130px;
`;

const CustomImg = styled.img`
  border-radius: 5px;
  width: 105px;
  height: 160px;
  text-align:center;  
  &:hover {
    filter: brightness(0.5);
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    margin: 0 10px;
    padding: 5px 10px;
    font-size: 14px;
  }
  span {
    font-size: 16px;
    color: white;
  }
  width:110%;
`;
