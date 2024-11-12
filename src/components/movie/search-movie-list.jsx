// import { useState } from 'react';
// import * as S from './SearchPage_style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import styled from 'styled-components';



const SearchMovieList = ({searchValue}) =>{
  const [searchParams, setSearchParams] = useSearchParams({mq: ''});
  const mq = searchParams.get('mq');
  const url = `/search/movie?query=${searchValue}&include_adult=false&language=ko-KR&page=1`;
  const { data: movies, isLoading, isError } = useCustomFetch(url);


  return(
    <MovieGridContainer>
    {movies.map((movie) => (
        <CustomLi key={movie.id}>
            <Customdiv2 onClick={() => handleMovieClick(movie.id)}>
                <CustomImg src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                <CustomP fontSize="8.5px" fontWeight="700">{movie.title}</CustomP>
                <CustomP fontSize="7px">{movie.release_date}</CustomP>
            </Customdiv2>
        </CustomLi>
    ))}
    
    </MovieGridContainer>
  )
}

export default SearchMovieList;


const MovieGridContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
`;

const No = styled.p`
    color: white;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
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

const CustomLi = styled.li`
  list-style: none;
`;

const Customdiv2 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer; 
`;

const CustomImg = styled.img`
  border-radius: 5px;
  width: 120px;
  height: 190px;
  &:hover {
    filter: brightness(0.5);
  }
`;

