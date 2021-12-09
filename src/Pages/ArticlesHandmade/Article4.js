import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import kidandbroc from "../Home/img/kidandbroc.jpg";



const Article4 = () => {
    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading>
            <h4>Data publikacji: 5 grudzień, 2021</h4>
            <h2>Jak wyglądają nawyki żywieniowe naszych dzieci?</h2>
            <h3>Przekonaj się jaki obraz na nawyki naszych dzieci rzucają europejskie badania naukowe.</h3>
            <Tags>
                <ul>
                    <li>porady</li>
                    <li>lifestyle</li>
                    <li>zdrowie</li>
                    <li>nawyki</li>
                </ul>
            </Tags>
            <BannerContainer>
                <img src={kidandbroc}></img>
            </BannerContainer>
          </Heading>

          <ArticleContent> 
            <Lead>
                <p>
                    Niezwykle istotne jest, aby dziecko stosowało zdrową dietę, aby zapobiec niedożywieniu (zahamowanie wzrostu, wyniszczenie, 
                    niedobory mikroskładników odżywczych, otyłość) i chorobom niezakaźnym. Uważa się obecnie że słaba jakość diety jest główną 
                    przyczyną chorób na świecie. W ostatnich dekadach, zmiany we wzorcach żywieniowych i zachowaniach związanych z aktywnością 
                    fizyczną zostały zidentyfikowane jako prawdopodobne przyczyny do wzrostu otyłości u dzieci.
                </p>
            </Lead>
            <Body>
                <p>
                    Preferencje żywieniowe i nawyki żywieniowe utrwalone w dzieciństwie i młodości mają tendencję być utrzymywane w wieku dorosłym. 
                    Co sprawia, że ​​żywienie w dzieciństwie jest ważnym problemem zdrowia publicznego. Świadomość błędów żywieniowych jest elementem 
                    edukacji żywieniowej, ale także przybliża do wprowadzenia korzystnych zmian do jadłospisu. 
                </p>
                <p>
                    Jak więc wyglądają nawyki żywieniowe naszych pociech? Przeanalizujmy wyniki badań wykonanych na 132 489 dzieciach w wieku wczesnoszkolnym z 23 krajów Europy.
                </p>
                <h5>1. Spożywanie śniadania.</h5>
                <p>
                    Większość dzieci spożywa codziennie śniadanie (78,8%), ale około 2,3% spożywało śniadanie 
                    „nigdy lub mniej niż raz w tygodniu”, a 8,6% spożywało śniadanie w „niektóre dni” 
                    (od jednego do trzech dni w tygodniu).
                </p>
                <h5>2. Spożywanie świeżych owoców i warzyw.</h5>
                <p>
                    Z danych wynika, że 42,5% dzieci spożywa świeże owoce „codziennie”, a 7,5% „nigdy ich nie spożywa lub spożywa rzadziej niż 
                    raz w tygodniu”. Około jedna czwarta (22,6%) wszystkich dzieci spożywa warzywa „codziennie”, a 14,0% „nigdy lub rzadziej niż 
                    raz w tygodniu”. 
                </p>
                <h5>3. Spożywanie słonych przekąsek</h5>
                <p>
                    Połączone dane szacunkowe wskazują, że 5,2% dzieci spożywa przekąski „codziennie”, ale 57,9% spożywa pikantne przekąski 
                    „nigdy lub rzadziej niż raz w tygodniu”.
                </p>
                <h5>4. Spożywanie słodyczy.</h5>
                <p>
                    Badania wykazały, że 10,3% dzieci spożywało słodycze „codziennie”, a 32,8% spożywało 
                    słodycze „nigdy lub mniej niż raz w tygodniu’’. 
                </p>
                <h5>5. Spożywanie słodkich napoi bezalkoholowych.</h5>
                <p>
                    Około co dziesiąte dziecko (9,4%) spożywa codziennie słodkie napoje bezalkoholowe.
                </p>
                <h5>6. Inne najczęstsze błędy żywieniowe pośród dzieci:</h5>
                <ul>
                    <li>niewłaściwy skład pożywienia: nadmiar tłuszczu (powyżej 50%), nadmiar białka (ok. 50%), cukrów prostych, niedobór błonnika,</li>
                    <li>niezrównoważone pożywienie - chipsy, frytki, fast foody,</li>
                    <li>nieregularne i niepełnowartościowe posiłki,</li>
                    <li>zastępowanie właściwych posiłków słodyczami,</li>
                    <li>nadmiar żywności oczyszczonej,</li>
                    <li>picie zbyt małej ilość wody.</li>
                </ul>
            </Body>
            <Conclusion>
                <p>
                    Świadomość nawyków żywieniowych pozwala na zapoznanie się w podstawowymi błędami w diecie. 
                    Znając problem możemy podjąć dalsze działania jak z nim walczyć. W przypadku dzieci zachowania 
                    żywieniowe stanowią istotną podstawę do wdrążenia planu zwalczania min. niedożywienia i otyłości. 
                    Nie lekceważmy nawyków żywieniowych naszych dzieci. Stanowią one podstawę przyszłych wzorców żywieniowych. 
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
  p{
    font-weight: 1000;
    font-size: 1.1rem;
    }
  `
  const Body = styled.div`
    p{
        margin-top: 0.5rem;
    }
     h5{
          font-size: 16px;
          margin-top: 0rem;
      };
    ul{
        margin-top: 0.5rem;
    }`;
  const Conclusion = styled.div``;

  export default Article4;