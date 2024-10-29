import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

const MovieDetailPage = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?language=ko-KR`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDkyYzEwYTQyYTQ1ZDA5MDdjNTE5Y2FkMmEzODE5MyIsIm5iZiI6MTczMDE3MjczMC44NTM2MzIsInN1YiI6IjY3MDIzYzBiZjM0OTVkNzJjNGY3YTQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r1TPbGvFqG_gwp1Q5Co_O5uzPcxqNgWvlODwjAYobZc',
        },
      });
      console.log(movieResponse)
      const creditResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=ko-KR`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDkyYzEwYTQyYTQ1ZDA5MDdjNTE5Y2FkMmEzODE5MyIsIm5iZiI6MTczMDE3MjczMC44NTM2MzIsInN1YiI6IjY3MDIzYzBiZjM0OTVkNzJjNGY3YTQ2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r1TPbGvFqG_gwp1Q5Co_O5uzPcxqNgWvlODwjAYobZc',
        },
      });
      setMovie(movieResponse.data);
      setCredits(creditResponse.data);
    };
    fetchMovieDetails();
  }, [movieid]);

  if (!movie || !credits) return <div>Loading...</div>;

  const director = credits.crew.find((person) => person.job === "Director");
  const topCast = credits.cast; 
  return (
    <Background>
      <Container>
        <MovieInfo>
        <BackdropImage backdropPath={movie.backdrop_path} />
          <Overlay>
            <Title>{movie.title}</Title>
            <p>평균 {movie.vote_average}</p>
            <p>{movie.release_date}</p>
            <p>{movie.runtime}분</p>
            
            <Customdiv3>
              <CustomP>{movie.tagline}</CustomP>
              <p>{movie.overview}</p>
            </Customdiv3>
              
          </Overlay>
        </MovieInfo>
        
        <CastSection>
          <CastTitle>감독/출연</CastTitle>
          <CastList>
            {director && (
              <CastItem>
                <ProfileImage src={`https://image.tmdb.org/t/p/w185${director.profile_path}`} alt={director.name} />
                <CastName>{director.name}</CastName>
                <CastRole>Director</CastRole>
              </CastItem>
            )}
            {topCast.map((actor) => (
              <CastItem key={actor.id}>
                <ProfileImage 
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : 'https://via.placeholder.com/80'} 
                  alt={actor.name} 
                />
                <CastName>{actor.name}</CastName>
                <CastRole>{actor.character} (voice)</CastRole>
              </CastItem>
            ))}
          </CastList>
        </CastSection>
      </Container>
    </Background>
  );
};


export default MovieDetailPage;

const Background = styled.div`
    margin-left: 200px;
    margin-top:50px;
    background-color:black;
    height:100vh;

`
const Container = styled.div`
  background-color: #121212;
  color: white;
  padding: 20px;
`;

const MovieInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 400px;
`;

const BackdropImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url(${props => `https://image.tmdb.org/t/p/original${props.backdropPath}`});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  z-index: 1; 
  padding: 20px;
  max-width: 40%;
  color: white;
`;


const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const CastSection = styled.div`
  margin-top: 40px;
`;

const CastTitle = styled.h2`
  font-size: 24px;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const CastItem = styled.div`
  width: 100px;
  text-align: center;
`;


const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover; // 원형으로 유지
  border: 2px solid gray;
  display: block; // 블록으로 설정
  margin: 0 auto; // 수평 중앙 정렬
`;


const CastName = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
`;

const CastRole = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
`;

const Customdiv3 = styled.div`
  margin-top:20px;
  displat:block;
  height: 250px;
  font-size:12px;
`

const CustomP = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 20px;
  

`