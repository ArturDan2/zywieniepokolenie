import React from "react";
import styled from "styled-components";



const ArticleNewestElement = () => {
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
    height: 43vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    background: pink;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    height: 100%;
    text-align: justify;
    h2{
        font-size: 48px;
        padding: 1rem 0rem;
    }
    h4{
        color: #6b6b6b;
        font-weight: 200;
    }
    h3{
        font-weight: 400;
    }
  `;
  export default ArticleNewestElement;