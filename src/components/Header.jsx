import React from "react"
import styled from "styled-components";

const Header = () => {
    return(
        <StHeaderContainer>
            <p>My Todo List</p>
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

export default Header;