import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
    
const navigate=useNavigate();

    return(
        <StHeaderContainer>
            <MyTodoList onClick={() => navigate(`/`)}><HomeIcon sx={{ fontSize: 30 }} /></MyTodoList> 
            <p>React</p>
        </StHeaderContainer>
    )
}

const StHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 0px 20px;
`

const MyTodoList = styled.button`
border:none;
background-color:white;
cursor:pointer; 
font-size:15px;
&:hover{color:skyblue}
margin-left:-10px;
`

export default Header;