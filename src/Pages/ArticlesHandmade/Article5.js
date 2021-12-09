import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import kid from "../Home/img/kid.jpg";



const Article5 = () => {

    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading>
            <h4>Data publikacji: 4 grudzień, 2021</h4>
            <h2>Wpływ rodziców na zachowania żywieniowe dzieci</h2>
            <h3>Jak duży wpływ masz na budowanie nawyków swojego dziecka?</h3>
            <Tags>
                <ul>
                    <li>żywienie</li>
                    <li>lifestyle</li>
                    <li>nawyki</li>
                    <li>porada</li>
                </ul>
            </Tags>
            <BannerContainer>
              <img src={kid}/>
            </BannerContainer>
          </Heading>

          <ArticleContent> 
            <Lead>
                <p>
                    Obecnie nawyki żywieniowe dzieci rozwijają się w warunkach obfitości żywieniowej, przy 
                    czym dostępność gotowej żywności jest powszechna. Na kształtowanie się zachowań żywieniowych w pierwszych lata życia mają 
                    wpływ różnorodne czynniki. Zaliczamy do nich genotyp, odżywianie się w okresie prenatalnym, wpływy rodzinne, kulturowo-społeczne,
                    warunki cywilizacyjne, religię i inne. Ten artykuł pokaże Ci jaką rolę w kształtowaniu się zachowań żywieniowych masz Ty jako 
                    rodzic.
                </p>
            </Lead>
            <Body>
                <p>
                    Zachowania żywieniowe ewoluują w pierwszych latach życia jako procesy biologiczne i behawioralne ukierunkowane na spełnienie 
                    wymagań dotyczących zdrowia i wzrostu. Pierwsze pięć lat życia to czas szybkiego rozwoju fizycznego i zmian i są to lata kiedy 
                    rozwijają się zachowania żywieniowe które mogą służyć jako podstawa przyszłych wzorców żywieniowych. W trakcie tych lat dzieci 
                    uczą się co, kiedy i ile jeść na podstawie nawyków swoich rodziców i rodzinnych przekonań. Rozwinęły się różnorodne praktyki 
                    żywienia dzieci, aby dostarczyć im składników odżywczych niezbędnych do prawidłowego rozwoju.
                </p>
                <p>
                    Rodzice silnie kształtują pierwsze doświadczenia dzieci z żywnością i jedzeniem. Świadomość rodzica i 
                    wiedza jest niezwykle istotna w implementacji pierwszych nawyków żywieniowych. Dzieci szybko się uczą 
                    i chętnie naśladują wzorce. Badania potwierdzają, że preferencje dzieci związane są w dużej mierze 
                    z żywnością, która jest im dobrze znana. Dostępność owoców i warzyw w domu często wiązała się z lepszym zestawem
                    czynników motywacyjnych, zdolnościami i wiedzą rodziców. Badania laboratoryjne dostarczają dowodów na to, ze duże porcje jedzenia 
                    sprzyjają większemu spożyciu energii przez dzieci w wieku dwóch lat. Kiedy odpowiednie do wieku porcje zostały podwojone, dzieci w wieku 
                    przedszkolnym jadły o około 25-29% więcej niż odpowiednia dla tego wieku porcja. Spożywanie dużych porcji nie jest związane ze stanem masy 
                    ciała, raczej jest to szczególna podatność osób z nadwagą na przejadanie się dużymi porcjami gdy są do dyspozycji. 
                </p>
                <p>
                    Dzieci uczą się o jedzeniu min. poprzez obserwację zachowań żywieniowych innych. Stwierdzono, że konsumpcja warzyw przez dzieci w wieku 
                    przedszkolnym miała wpływ na wybory żywieniowe rówieśników. Kiedy dzieci obserwowały dorosłych, miało to podobny efekt. Ponadto dzieci które 
                    obserwowały nauczyciela entuzjastycznie konsumującego posiłek, charakteryzowały się wyborem nowej żywności. Modelowanie przez rodziców ma 
                    podobny, jeśli nie silniejszy wpływ na preferencje dzieci i wyborów. Na przykład nastoletnie dziewczęta, przyglądające się ojcom którzy 
                    konsumowali mleko, miały wyższe spożycie wapnia niż dziewczęta, nie przyglądały się ojcom pijącym mleko. 
                </p>
                <p>
                    Praktyki rodzicielskie i interakcje rodzic-dziecko podczas karmienia mają silny wpływ na kształtowanie się preferencji żywieniowych, wzorów spożycia, 
                    jakości diety, wzrost i stan wagi. Praktyki żywieniowe rodziców często obejmują próby zwiększenia spożycia przez dzieci produktów bogate w 
                    składniki odżywcze lub ograniczyć dostęp i spożycie ,,śmieciowej” żywności. Rodzice stosując te praktyki może i mają dobre intencje, ale wyniki 
                    badań ujawniają, że takie próby mogą mieć negatywny wpływ na preferencje żywieniowe dzieci. Ogólnie rzecz biorąc, nadmierna kontrola przez rodzica ma 
                    tendencję wiązać się z przejadaniem się i gorszą samoregulacją pobierania energii. Na przykład używanie jedzenia jako nagrody za dobre 
                    zachowanie zwiększyło spożycie tych produktów przez dzieci. Niezamierzonym skutkiem tej metody jest promowanie produktów wysokoenergetycznych 
                    i wysoko przetworzonych. 
                </p>
            </Body>
            <Conclusion></Conclusion>
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
  `;
  const Conclusion = styled.div``;

  export default Article5;