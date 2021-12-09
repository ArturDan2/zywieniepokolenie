import React from "react";
import styled from "styled-components";



const ArticleElement = () => {
    return (
        <MainContainer>
            <ImageContainer>
                <img/>
            </ImageContainer>
            <TextContainer>
                <h4>January 13, 2021 </h4>
                <h2>7 zasad prawidłowego żywienia</h2>
                <h3>Jakie zasady wpływają na nasze zdrowie? Poznaj 7 głównych zasad przedstawionych w formie talerza zdrowego żywienia!</h3>
            </TextContainer>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
    margin-top: 1rem;
    width: 29%;
    height: 25rem;
  `;

  const ImageContainer = styled.div`
    display: flex;
    height: 12rem;
    background: pink;
    `;

  const TextContainer = styled.div`
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h4{
        font-weight: 100;
        color: #6b6b6b;
    }
    h3{
        font-weight: 400;
        font-size: 18px;
    }`;

  export default ArticleElement;