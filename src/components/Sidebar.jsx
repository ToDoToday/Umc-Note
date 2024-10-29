// Sidebar.jsx
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";

const Sidebar = () => {
    return (
        <CustomUl>
            <CustomLi marginTop='30px'>
                <FaSearch style={{fontSize:'12px',color:'white',marginRight:'5px'}}/>
                <Link style={{color:'white'}}to={'/search'}>찾기</Link>
            </CustomLi>
            <br />
            <CustomLi>
                <BiSolidCameraMovie style={{fontSize:'12px',color:'white',marginRight:'5px'}}/>
                <Link style={{color:'white'}}to={'/category'}>영화</Link>
            </CustomLi>
        </CustomUl>
    );
};

export default Sidebar;

const CustomUl = styled.ul`
    position: fixed; /* 사이드바를 고정 위치로 설정 */
    top: 0; /* 상단에 고정 */
    left: 0; /* 왼쪽에 고정 */
    height: 100vh; /* 전체 높이를 채움 */
    list-style:none;
    width:200px;
    background-color:rgb(20, 21, 23);
    margin-top:50px;
    

`
const CustomLi = styled.li`
    margin-left:30px;
    margin-top: ${(props) => props.marginTop || '0px'};
`
