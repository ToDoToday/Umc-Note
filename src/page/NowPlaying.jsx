import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardListSkeleton from '../components/card/card-list-skeleton';
import { useGetInfiniteMovies } from '../hooks/useGetInfiniteMovies';
import { useInView } from 'react-intersection-observer';
import { ClipLoader } from 'react-spinners';
const NowPlaying = () => {
  const navigate = useNavigate();

  const {data:movies,
    isLoading,
    isFetching,
    hasNextPage,
    isPending,
    fetchNextPage,
    error,
    isError,
    isFetchingNextPage
  } = useGetInfiniteMovies('now_playing') 

  const {ref,inView} = useInView({
    threshold:0
  })

  useEffect(()=>{
    if(inView){
      !isFetching && hasNextPage &&fetchNextPage();
    } 
  },[inView,isFetching,hasNextPage,fetchNextPage])

  const handleMovieClick = (movieid) => {
    navigate(`/movies/${movieid}`);
  };

  if (isError) return <CustomP>영화 정보를 가져오는 데 오류가 발생했습니다.{isError.message}</CustomP>;
  return (
    <>
      <CustomUl>
      {movies?.pages.map((page) => {
        return page.results?.map((movie,_) => (
          <CustomLi movie={movie} key={movie.id}>
            <Customdiv2 onClick={() => handleMovieClick(movie.id)}>
              <CustomImg src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
              <CustomP fontSize="8.5px" fontWeight="700">{movie.title}</CustomP>
              <CustomP fontSize="7px">{movie.release_date}</CustomP>
            </Customdiv2>
          </CustomLi>
        ));
      })}
      {isFetching &&

        <CardListSkeleton number={20}/>

         }
      </CustomUl>
      <div ref={ref} style={{marginTop:'20px',marginBottom:'50px', display:'flex', justifyContent:'center',width:'115%'}}>
        {!isFetching && <ClipLoader color='white'/>}
      </div>
    </>
  );
};

export default NowPlaying;



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
  gap: 20px;
  margin-left: 200px;
  margin-top: 50px;
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
