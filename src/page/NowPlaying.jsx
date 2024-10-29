import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const moviesapi = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDkyYzEwYTQyYTQ1ZDA5MDdjNTE5Y2FkMmEzODE5MyIsIm5iZiI6MTczMDE3MjczMC44NTM2MzIsInN1YiI6IjY3MDIzYzBiZjM0OTVkNzJjNGY3YTQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r1TPbGvFqG_gwp1Q5Co_O5uzPcxqNgWvlODwjAYobZc',
        },
      });
      setMovies(moviesapi.data.results);
    };
    getMovies();
  }, []);

  const handleMovieClick = (movieid) => {
    navigate(`/movies/${movieid}`);
  };

  return (
    <CustomUl>
      {movies.map((movie) => (
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
