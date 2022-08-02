import React from "react";
import styled from "styled-components";
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <StLayoutContainer>
            <Header/>
            <StContents>{children}</StContents>
        </StLayoutContainer>
    )
}

const StLayoutContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    box-sizing: content-box;
    

`

const StContents = styled.div``

export default Layout;