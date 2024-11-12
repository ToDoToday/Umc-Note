import { useState } from 'react';
import * as S from './SearchPage_style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import styled from 'styled-components';
import CardSkeleton from '../components/card/card-skelleton';
import CardListSkeleton from '../components/card/card-list-skeleton';
import useDebounce from '../hooks/useDebounce';

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [hasSearched, setHasSearched] = useState(false); 
    const navigate = useNavigate();

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const debouncedSearchText = useDebounce(searchValue, 200); // 200ms로 설정된 debounce

    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    });

    const mq = searchParams.get('mq');

    const handleSearchMovie = () => {
        if (debouncedSearchText.trim() === '') {
            setHasSearched(false);
            return;
        }

        if (mq === debouncedSearchText) return;
        
        setHasSearched(true);
        navigate(`/search?mq=${debouncedSearchText}`);
    };

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    const url = `/search/movie?query=${debouncedSearchText}&include_adult=false&language=ko-KR&page=1`;
    const { data: movies, isLoading, isError } = useCustomFetch(url);

    return (
        <S.Background>
            <SearchContainer>
                <StyledInput
                    placeholder="영화 제목 입력"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <StyledButton onClick={handleSearchMovie}>검색</StyledButton>
            </SearchContainer>

            {isLoading && 
            <MovieGridContainer>
                <CardListSkeleton number={20}/>
            </MovieGridContainer>
            }
            {isError && <S.CustomH1>오류가 발생했습니다. 다시 시도해주세요.</S.CustomH1>}

            {hasSearched && !isLoading && !isError && (
                movies && movies.length > 0 ? (
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
                ) : (
                    <No>{`"${searchValue}"은 없습니다.`}</No>
                )
            )}
        </S.Background>
    );
};

export default SearchPage;

const Title = styled.h1`
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
`;
const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledInput = styled.input`
    width: 600px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #1f1f1f;
    outline: none;
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    font-size: 16px;
    background-color: #1f1f1f;
    color: white;
    border: 2px solid #1f1f1f;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    &:hover {
        background-color: #333333;
    }
`;

const ErrorText = styled.h2`
    color: red;
    text-align: center;
    margin-top: 20px;
`;
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
  text-align: left;
  white-space: nowrap;      
  overflow: hidden;       
  text-overflow: ellipsis; 
  width: 100%;   
`

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
