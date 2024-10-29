
import styled from "styled-components"


const MoviePage = ()=>{
    return (
        <Background>
            <CustomH1>홈 페이지</CustomH1>
        </Background>
    )
}

export default MoviePage

const Background = styled.div`
    margin-left: 200px;
    margin-top:50px;
    background-color:black;
    height:100vh;

`
const CustomH1 = styled.h1`
    color: white;
    margin:0;
    margin-top:10px;
    margin-left:10px;
`