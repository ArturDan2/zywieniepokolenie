import React from "react";
import styled from "styled-components";
import { ArticlesContent } from "./ArticlesObjects";



const ArticleContent = (articleIndex) => {
  const indexExtended = articleIndex.articleIndex.articleIndex;
  console.log(indexExtended)
    return (
        <MainContainer>
            <Lead>{ArticlesContent[indexExtended].article.lead}</Lead>
            <p>{ArticlesContent[indexExtended].article.body}</p>
            <p>{ArticlesContent[indexExtended].article.conclusion}</p>
        </MainContainer>
    )
  }

  const MainContainer = styled.div`
    margin: 0rem 7rem;
    p{
        text-align: justify;
        margin: 2rem 0rem;
    }
  `;

  const Lead = styled.p`
    font-weight: 1000;
    font-size: 1.1rem;
  `
  export default ArticleContent;