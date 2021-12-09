import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import plate from "../Home/img/plate.jpg";
import talerzplakat from "../Home/img/talerz-plakat.jpg";



const Article3 = (articleIndex) => {
    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading>
            <h4>Data publikacji: 6 grudzień, 2021</h4>
            <h2>Talerz zdrowego żywienia</h2>
            <h3>Czym jest talerz zdrowego żywienia i jak z niego korzystać?</h3>
            <Tags>
                <ul>
                    <li>zdrowie</li>
                    <li>porada</li>
                    <li>nawyki</li>
                    <li>żywienie</li>
                </ul>
            </Tags>
            <BannerContainer>
              <img src={plate}/>
            </BannerContainer>
          </Heading>

          <ArticleContent> 
            <Lead>
                <p>
                    W ramach zadań realizowanych w Narodowym Programie Zdrowia, Narodowy Instytut Zdrowia Publicznego - PZH opracował nowe „Zalecenia 
                    zdrowego żywienia”. Materiał po raz pierwszy zaprezentowano 17 października 2020 roku podczas wydarzenia online – V Narodowego Kongresu 
                    Żywieniowego.
                </p>
            </Lead>
            <Body>
                <p>
                    Wprowadź dobre nawyki żywieniowe z Talerzem zdrowego żywienia. Zacznij od siebie i daj żywieniowy przykład swoim pociechom. 
                    Graficzne ilustracje pomogą Ci zapamiętać najważniejsze zasady zdrowej diety. Wydrukuj Talerz, powieś w widocznym miejscu i rozpocznij 
                    zmianę już dziś!
                </p>
                <img src={talerzplakat}></img>
                <p>
                    Zalecenia zdrowego żywienia zostały zilustrowane w formie graficznej w postaci talerza z produktami. Podziałki na talerzu odnoszą 
                    się do rekomendowanych porcji danych grup produktów, które powinny znaleźć się w naszym jadłospisie. Wokół talerza znajdują się cenne 
                    wskazówki dotyczące tego jakich produktów jeść więcej, jakich unikać, a jakie warto zamienić na zdrowsze alternatywy. Uwzględniona 
                    została także aktywność fizyczna i potrzeba utrzymania masy ciała w normie.
                </p>
                
            </Body>
            <Conclusion>
                <p>
                    Dostosowanie się do zaleceń może być początkiem dobrej zmiany. Jednak zalecenia to nie wszystko. Ważne jest, aby działać 
                    profilaktycznie poprzez nieustanne pogłębianie swojej wiedzy z zakresu żywienia. Mogą pojawić się także gorsze dni i brak 
                    motywacji. Nie oczekuj od siebie bycia na 100%. Każde drobne zmiany wpłyną pozytywnie na Twoje zdrowie. Zacznij od małych 
                    kroków.
                </p>
            </Conclusion>
          </ArticleContent>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
    margin: 0rem 15rem 10rem 15rem;
  `;
  //heading
  const Heading = styled.div`
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
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 80% 30%;
      overflow: hidden;
    }
  `
  //content 
  const ArticleContent = styled.div`
    margin: 0rem 7rem;
    p{
        margin: 2rem 0rem;
    }
  `;

  const Lead = styled.div`
    font-weight: 1000;
    font-size: 1.1rem;
  `;
  const Body = styled.div`
    h6{
            font-size: 16px;
            font-weight: 500;
        };
    h5{
          font-size: 16px;
          margin-top: 1rem;
      };
    ul{
        margin-top: 0.5rem;
    }
    span{font-weight: 1000
    }
    img{
      width: 100%;
    }`;
  const Conclusion = styled.div``;
  export default Article3;