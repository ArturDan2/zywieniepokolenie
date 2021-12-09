import React from "react";
import styled from "styled-components";
import { ArticlesContent } from "./ArticlesObjects";

const Heading = (articleIndex) => {
    const indexExtended = articleIndex.articleIndex.articleIndex;
    console.log(articleIndex);
    return (
        <MainContainer>
            <h4>Opublikowano {ArticlesContent[indexExtended].date}</h4>
            <h2>{ArticlesContent[indexExtended].title}</h2>
            <h3>{ArticlesContent[indexExtended].subheading}</h3>
            <Tags>
                <ul>
                    <li>żywienie</li>
                    <li>lifestyle</li>
                    <li>nawyki</li>
                    <li>porada</li>
                </ul>
            </Tags>
            <BannerContainer>

            </BannerContainer>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 2rem;
    h2{
        font-size: 54px;
    };
    h3{
        margin: 1.5rem 0rem;
    }
    h4{
        color: #6b6b6b;
        font-weight: 400;
    };
  `;

  const Tags = styled.div`
    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        font-size: 14px;
        margin: 0rem 0.7rem;
        padding: 0.3rem 1.2rem;
        background: #EF0061;
        color: white;
    }
  `;

  const BannerContainer = styled.div`
    margin: 3rem 2rem;
    width: 60rem;
    height: 30rem;
    background: pink;
  `
  export default Heading;