import {React, useEffect} from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import grandma from "../Home/img/grandma.jpg";
import changes from "../Home/img/changes.jpg";
import plate from "../Home/img/plate.jpg";
import kidandbroc from "../Home/img/kidandbroc.jpg";
import kid from "../Home/img/kid.jpg";
import {Link} from "react-router-dom";



const ArticleListPage = () => {
    return (
        <MainContainer>
            <ScrollToTop/>
            <h1>Artykuły</h1>
            <Link to={"/article/1"}>
                <ArticleNewestElement>
                    <FirstImageContainer>
                        <img src={grandma}/>
                    </FirstImageContainer>
                    <FirstTextContainer>
                        <h4>08 grudzień, 2021</h4>
                        <h2>Schabowy babci Krysi w zdrowszym wydaniu</h2>
                        <h3>Niedzielny obiad, rodzina zbiera się przy wspólnym stole, a na talerzach kotlet schabowy. Czy trzeba zupełnie z niego rezygnować? Niekoniecznie!</h3>
                    </FirstTextContainer>
                </ArticleNewestElement>
            </Link>

            <OtherArticles>
                <StyledLink to={"/article/2"}>
                    <ArticleElement>
                        <OtherImageContainer>
                            <img src={changes}/>
                        </OtherImageContainer>
                        <OtherTextContainer>
                            <h4>7 grudzień, 2021</h4>
                            <h2>Zmiana nawyków żywieniowych u dzieci? Zacznij od siebie!</h2>
                            <h3>Jak pozbyć się niezdrowych nawyków żywieniowych?</h3>
                        </OtherTextContainer>
                    </ArticleElement>
                </StyledLink>
                
                <StyledLink to={"/article/3"}>
                    <ArticleElement>
                        <OtherImageContainer>
                            <img src={plate}/>
                        </OtherImageContainer>
                        <OtherTextContainer>
                            <h4>6 grudzień, 2021r</h4>
                            <h2>Talerz zdrowego żywienia</h2>
                            <h3>Wprowadź dobre nawyki żywieniowe z Talerzem zdrowego żywienia. Zacznij od siebie i daj żywieniowy przykład swoim pociechom.</h3>
                        </OtherTextContainer>
                    </ArticleElement>
                </StyledLink>
                
                <StyledLink to={"/article/4"}>
                    <ArticleElement>
                        <OtherImageContainer>
                            <img src={kidandbroc}/>
                        </OtherImageContainer>
                        <OtherTextContainer>
                            <h4>5 grudzień, 2021</h4>
                            <h2>Jak wyglądają nawyki żywieniowe naszych dzieci?</h2>
                            <h3>Przekonaj się jaki obraz na nawyki naszych dzieci rzucają europejskie badania naukowe.</h3>
                        </OtherTextContainer>
                    </ArticleElement>
                </StyledLink>
                
                <StyledLink to={"/article/5"}>
                    <ArticleElement>
                        <OtherImageContainer>
                            <img src={kid}/>
                        </OtherImageContainer>
                        <OtherTextContainer>
                            <h4>4 grudzień, 2021</h4>
                            <h2>Wpływ rodziców na zachowania żywieniowe dzieci</h2>
                            <h3>Jak duży wpływ masz na budowanie nawyków swojego dziecka?</h3>
                        </OtherTextContainer>
                    </ArticleElement>
                </StyledLink>
            </OtherArticles>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
    margin: 5rem 12rem;
    h1{
        font-size: 70px;
        margin-bottom: 3rem;
    }
    a{
        color: black;
    }
  `;
  //newest
  const ArticleNewestElement = styled.div`
    height: 43vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const FirstImageContainer = styled.div`
    min-height: 100%;
    min-width: 35rem;
    img{
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        overflow: hidden;
    }
  `;

  const FirstTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    min-width: 30rem;
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
  // other
  const OtherArticles = styled.div`
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        `;

const ArticleElement = styled.div`
margin-top: 2rem;
height: 25rem;
`;

const OtherImageContainer = styled.div`
height: 12rem;
background: pink;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
`;

const OtherTextContainer = styled.div`
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

const StyledLink = styled(Link)`
    width: 21rem;
    `
  export default ArticleListPage;