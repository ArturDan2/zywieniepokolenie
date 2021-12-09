import React, {useState} from "react";
import styled from "styled-components";
import food from "./../img/food.jpg";
import grandma from "./../img/grandma.jpg";
import changes from "./../img/changes.jpg";
import plate from "./../img/plate.jpg"
import { ArticlesContent } from "../../Article/ArticlesObjects";
import {Link} from "react-router-dom";
// import ArticleThumb from "./ArticleThumb";

    const Articles = ({articleIndex, setArticleIndex}) => {
    const lastArticleIndex = ArticlesContent.length;
    return(
        <MainContainer>
            {/* <ArticleThumb index={lastArticleIndex} articleIndex={articleIndex} setArticleIndex={setArticleIndex}/>
            <ArticleThumb index={lastArticleIndex - 1} articleIndex={articleIndex} setArticleIndex={setArticleIndex}/>
            <ArticleThumb index={lastArticleIndex - 2} articleIndex={articleIndex} setArticleIndex={setArticleIndex}/> */}
                <ArticleThumb>
                    <ImageContainer>
                        <img src={grandma}></img>
                    </ImageContainer>
                    <Container1>
                        <Text>
                            <h3>Schabowy babci Krysi w zdrowszym wydaniu</h3>
                            <p>Niedzielny obiad, rodzina zbiera się przy wspólnym stole, a na talerzach kotlet schabowy. Zdecydowanie kotlet schabowy jest jedną z największych miłości Polek i Polaków. Nie jest on jednak synonimem zdrowego odżywiania. Czy trzeba zupełnie z niego rezygnować? Niekoniecznie!</p>
                        </Text>
                        <span>
                            <Link to={"/article/1"}><button>Przeczytaj więcej...</button></Link>
                        </span>
                    </Container1>
                </ArticleThumb>

                <ArticleThumb>
                    <ImageContainer>
                        <img src={changes}></img>
                    </ImageContainer>
                    <Container1>
                        <Text>
                            <h3>Zmiana nawyków żywieniowych u dzieci? Zacznij od siebie!</h3>
                            <p>Preferencje żywieniowe i nawyki żywieniowe utrwalone w dzieciństwie i młodości mają tendencję być utrzymywane w wieku dorosłym. Świadomość błędów żywieniowych jest elementem edukacji żywieniowej, ale także przybliża do wprowadzenia korzystnych zmian do jadłospisu. </p>
                        </Text>
                        <span>
                            <Link to={"/article/2"}><button>Przeczytaj więcej...</button></Link>
                        </span>
                    </Container1>
                </ArticleThumb>
                
                <ArticleThumb>
                    <ImageContainer>
                        <img src={plate}></img>
                    </ImageContainer>
                    <Container1>
                        <Text>
                            <h3>Talerz zdrowego żywienia</h3>
                            <p>Wprowadź dobre nawyki żywieniowe z Talerzem zdrowego żywienia. Zacznij od siebie i daj żywieniowy przykład swoim pociechom. Graficzne ilustracje pomogą Ci zapamiętać najważniejsze zasady zdrowej diety. Wydrukuj Talerz, powieś na lodówce i rozpocznij zmianę już dziś!</p>
                        </Text>
                        <span>
                            <Link to={"/article/3"}><button>Przeczytaj więcej...</button></Link>
                        </span>
                    </Container1>
                </ArticleThumb>
            
            <ShowMoreContainer>
               <Link to="/articles"><ShowMoreButton>Pokaż więcej artykułów</ShowMoreButton></Link>
            </ShowMoreContainer>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
    margin: 8rem 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ArticleThumb = styled.div`
    min-height: 17rem;
    max-height: 20rem;
    max-width: 65rem;
    min-width: 65rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #D4F2FC;
    margin: 2rem 0rem;
    
    button{
        border: none;
        padding: 0.5rem 2rem;
        background: #013A63;
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 12rem;
        height: 2rem;
        :hover {
            background: #EF0061;
        }
    }
`
const ImageContainer = styled.div`
    height: 17rem;
    width: 65rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }
`;
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem;
    width: 100%;
    span{
        margin-top: 0.5rem;
    }`
const Text = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const ShowMoreButton = styled.button`
        padding: 0.3rem 0rem;
        font-size: 1.1rem;
        font-weight: 1000;
        background: none;
        border: none;
        border-bottom: 2px solid #013a6368;
        color: #013A63;
        cursor: pointer;
        transition: font-size 0.3s ease;
        :hover{
            font-size: 1.15rem;
        }
`
const ShowMoreContainer = styled.div`
    height: 4rem;
`
export default Articles;