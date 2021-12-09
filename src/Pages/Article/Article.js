import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "./Heading";
import ArticleContent from "./ArticleContent";
import ScrollToTop from "../../utils";



const Article = (articleIndex) => {
  console.log(articleIndex.articleIndex);
    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading articleIndex={articleIndex}/>
          <ArticleContent articleIndex={articleIndex}/>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
    margin: 0rem 15rem 10rem 15rem;
  `;
  export default Article;