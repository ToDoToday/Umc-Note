import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';

const TopRated = () => {
  const navigate = useNavigate();
  const {data:movies , isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-KR`)


  const handleMovieClick = (movieid) => {
    navigate(`/movies/${movieid}`);
  };
  if (isLoading) return <CustomP>로딩중...</CustomP>;
  if (isError) return <CustomP>영화 정보를 가져오는 데 오류가 발생했습니다.{isError}</CustomP>;
  return (
    <CustomUl>
      {movies.map((movie) => (
        <CustomLi key={movie.id}>
          <Customdiv2 onClick={() => handleMovieClick(movie.id)}>
            <CustomImg src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <CustomP fontSize='8.5px' fontWeight="700">{movie.title}</CustomP>
            <CustomP fontSize='7px'>{movie.release_date}</CustomP>
          </Customdiv2>
        </CustomLi>
      ))}
    </CustomUl>
  );
};

export default TopRated;

const CustomP = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize || 'normal'};
  color: white;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  width: 100px;
  height: 10px;
  text-align: left;
`;

const CustomUl = styled.ul`
  margin-left: 200px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈 허용 */
  gap: 5px;
  background-color: black;
`;

const Customdiv2 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer; 
`;

const CustomLi = styled.li`
  list-style: none;
`;

const CustomImg = styled.img`
  border-radius: 5px;
  width: 120px;
  height: 190px;
  &:hover {
    filter: brightness(0.5);
  }
`;
