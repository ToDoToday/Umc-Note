import styled from "styled-components";
import { Link } from "react-router-dom"; 
import emptyimg1 from '../components/empty1.jpg'; 
import emptyimg2 from '../components/empty2.jpg'; 
import emptyimg3 from '../components/empty3.jpg'; 
import emptyimg4 from '../components/empty4.jpg'; 

const Category = () => {
    return (
        <Background>
            <CustomH1>카테고리</CustomH1>
            <ImageGrid>
                <ImageContainer>
                    <Link to="/movies/now-playing">
                        <ClickableImage src={emptyimg1} alt="이미지 1" />
                        <TextOverlay>Now Playing</TextOverlay>
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/movies/popular">
                        <ClickableImage src={emptyimg2} alt="이미지 2" />
                        <TextOverlay>Popular</TextOverlay>
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/movies/top-rated">
                        <ClickableImage src={emptyimg3} alt="이미지 3" />
                        <TextOverlay>Top Rated</TextOverlay>
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/movies/up-coming">
                        <ClickableImage src={emptyimg4} alt="이미지 4" />
                        <TextOverlay>Up Coming</TextOverlay>
                    </Link>
                </ImageContainer>
            </ImageGrid>
        </Background>
    );
};

export default Category;

const Background = styled.div`
    margin-left: 200px;
    margin-top: 50px;
    background-color: black;
    height: 100vh;
`;

const CustomH1 = styled.h1`
    color: white;
    margin: 0;
    margin-top: 10px;
    margin-left: 10px;
`;

const ImageGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-left: 30px;
    margin-top: 30px;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 280px;
    height: 120px;
`;

const ClickableImage = styled.img`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`;

const TextOverlay = styled.div`
    position: absolute;
    bottom: 10px;
    left: 2.5%;
    bottom:3%;
    color: white;
    font-size: 12px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6); 
    padding: 5px 10px;
    border-radius: 5px;
    text-align: left;
`;
