// navbar.jsx
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Customnav>
            <Customspan2>
                <Link style={{fontWeight:'700',fontSize:"25px",color:'rgb(230, 51, 90)'}}to={'/'}>YONGCHA</Link>
            </Customspan2>

            <CustomSpan>
                <CustomLink style={{color:'white'}} to={'/signup'}>회원가입</CustomLink>
            </CustomSpan>

            <CustomSpan>
                <CustomLink style={{color:'white'}} to= {'/login'}>로그인</CustomLink>
            </CustomSpan>

        </Customnav>
    );
};

export default Navbar;

const Customnav = styled.nav`
    background-color:rgb(20, 21, 23);
    position: fixed;
    z-index: 1000;
    top:0;
    width:100%;
    height:50px;   
`

const Customspan2 = styled.span`
    display:inline-block;
    vertical-align: middle;
    margin-top:13px;
    margin-left:10px;
`


const CustomSpan = styled.span`
    display:inline-block;
    vertical-align: middle;
    float:right;
    margin-top:15px;
    a {
        margin-left:10px;
        margin-right:10px;
    }

      border-radius: 5px;
    

`

const CustomLink = styled(Link)`
    &:hover{
    background-color:rgb(228, 68, 101);
    border-radius: 5px;
    
};
`