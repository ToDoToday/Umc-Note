import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { axiosInstance } from '../apis/axios-instance';
// import useCustomFetch from '../hooks/useCustomFetch'; 
import { useGetMovies } from '../hooks/Queries/useGetMovies';
import { Query, useQuery } from '@tanstack/react-query';
import CardListSkeleton from '../components/card/card-list-skeleton';
// import { useGetInfiniteMovies } from '../hooks/useGetInfiniteMovies';


const NowPlaying = () => {
  const navigate = useNavigate();

  // const {data} = useGetInfiniteMovies('now_playing') 


  const {data:movies,isPending,isError } = useQuery({
    queryFn: ()=> useGetMovies({catagory:'now_playing', pageParam:1}),
    queryKey:['movies','now_playing'],
    cacheTime:10000,
    staleTime:10000,
  })

  const handleMovieClick = (movieid) => {
    navigate(`/movies/${movieid}`);
  };
  if (isPending) return(
    <MovieGridContainer>
      <CardListSkeleton number={20}/>
    </MovieGridContainer>
  );
  if (isError) return <CustomP>영화 정보를 가져오는 데 오류가 발생했습니다.{isError.message}</CustomP>;
  return (
    <CustomUl>
      {movies?.data?.results?.map((movie) => (
        <CustomLi key={movie.id}>
          <Customdiv2 onClick={() => handleMovieClick(movie.id)}>
            <CustomImg src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            <CustomP fontSize='8.5px' fontWeight="700">{movie.title}</CustomP>
            <CustomP fontSize='7px'>{movie.release_date}</CustomP>
          </Customdiv2>
        </CustomLi>
      ))}
    </CustomUl>
  );
};

export default NowPlaying;

const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  margin-left: 208px;
  margin-top: 70px;

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

const CustomUl = styled.ul`
  margin-left: 200px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
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
