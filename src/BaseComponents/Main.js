import React from "react";
import styled from "styled-components";
//Pages
import Home from "../Pages/Home/Home";
import Article from "../Pages/Article/Article";
import ArticleListPage from "../Pages/ArticleList/ArticleListPage";


const Main = () => {
    return(
        <MainContainer>
            <Home/>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
`
export default Main;