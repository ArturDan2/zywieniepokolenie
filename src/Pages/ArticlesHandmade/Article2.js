import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import changes from "../Home/img/changes.jpg";



const Article2 = (articleIndex) => {
  console.log(articleIndex.articleIndex);
    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading>
            <h4>Data publikacji: 7 grudzień, 2021</h4>
            <h2>Zmiana nawyków żywieniowych u dzieci? Zacznij od siebie!</h2>
            <h3>Jak pozbyć się niezdrowych nawyków żywieniowych?</h3>
            <Tags>
                <ul>
                    <li>porada</li>
                    <li>lifestyle</li>
                    <li>nawyki</li>
                    <li>żywienie</li>
                </ul>
            </Tags>
            <BannerContainer>
              <img src={changes}/>
            </BannerContainer>
          </Heading>

          <ArticleContent> 
            <Lead>
                <p>
                Zmiana zaczyna się w głowie. Jeżeli pojawia się w Tobie chęć zmiany swoich nawyków żywieniowych to pierwszy istotny krok w procesie kształtowania prawidłowych 
                nawyków żywieniowych masz za sobą. Ważne jest uświadomienie sobie popełnianych błędów, aby móc
                 wprowadzić zasady zdrowego żywienia do swojego jadłospisu. Nie trudno zmienić nawyki na 
                 tydzień czy dwa, ale to wypracowanie trwałych nawyków przyczynia się do poprawy zdrowia, 
                 czy redukcji tkanki tłuszczowej. Zdrowe nawyki żywieniowe to nie tymczasowa zmiana. 
                 Wspólnie przejdziemy przez wskazówki dla początkujących w zmianie złych nawyków żywieniowych.
                </p>
            </Lead>
            <Body>
                <h5>KROK 1: Przeanalizuj swoje nawyki żywieniowe.</h5>
                <p>
                    Aby wprowadzić jakiekolwiek zmiany do swojego życia, najpierw niezbędna jest świadomość 
                    obecnej sytuacji. Nie jesteśmy wprowadzić korzystnych nawyków kiedy nie mam wiedzy o tym 
                    jakie błędy popełniamy. Zastanów się nad tym jakie produkty spożywasz. Jakiej są jakości, 
                    czy są może produktami wysoko przetworzonymi, ile w Twojej diecie znajduje się świeżych 
                    owoców i warzyw. Przeanalizuj ile posiłków w ciągu dnia spożywasz, wybierane przez ciebie 
                    tłuszcze i sposób przygotowania potraw. Może Twoją zmianą będzie redukcja ilości spożywanego 
                    cukru? W tym celu warto przez kilka dni prowadzić dziennik żywieniowy. Dziennik żywieniowy to 
                    narzędzie które służy do śledzenia na bieżąco tego co spożywamy w danym dniu. Zapisuj wszystkie 
                    spożywane produkty, łącznie z solą, cukrem, dodatkami masła lub innych tłuszczy i napojami. 
                    Uwzględnij w swoim zapisie godziny spożywanych posiłków.
                </p>
                <h5>KROK 2: Wyznacz konkretny cel.</h5>
                <p>
                    Gdy znajdziemy już nawyk do zmiany, musimy postawić sobie cel. Cel powinien być konkretny. Możesz zacząć od drobnych zmian, 
                    ale skutecznych zmian. Nie sugeruj się innymi. Cel musi być dostosowany do Ciebie. 
                </p>
                <h6>Dobrze określony cel, który zwiększy prawdopodobieństwo sukcesu powinien być:</h6>
                <ul>
                    <li>- prosty</li>
                    <li>- istotny</li>
                    <li>- osiągalny</li>
                    <li>- mierzalny</li>
                    <li>- osiągalny w czasie</li>
                </ul>
                <h5>KROK 3: Rozpracuj nawyk.</h5>
                <p>
                    Zastanów się nad tym dlaczego tkwisz w swoim nawyku. Być może jest on podyktowany Twoimi emocjami? A może brakuje Ci czasu 
                    przed pracą aby przygotować pełnowartościowe śniadanie? Zmiana nawyku, aby działała powinna być dostosowana do Twojej 
                    sytuacji. Uwzględnij czas pracy, obowiązki, tryb życia. Przemyśl swoje emocje kiedy sięgasz po słodycze. Co wyzwala w Tobie 
                    określone zachowanie? Znajdź alternatywne rozwiązania. Wszystko co do tej pory rozpracowałeś możesz spisać na kartce.
                </p>
                <h5>KROK 4: Działaj.</h5>
                <p>
                    Jeżeli rozpracujesz już swój stary nawyk, możesz zabrać się za wprowadzenie nowego. Rób to małymi 
                    krokami co zwiększy Twoją motywację i obniży lęk. Zmiany muszą być dostosowane do Ciebie. 
                    Znajdą się osoby dla których drastyczna zmiana z dnia na dzień jest największym motywatorem i 
                    nie sięgają po półśrodki. Nie musisz działać w ten sam sposób. Jeżeli zmiana nawyku przychodzi 
                    Ci z trudem rozplanuj sobie plan działania na najbliższe tygodnie. Przygotuj go w taki sposób, 
                    aby każdy dzień przybliżał Cię do osiągnięcia postawionego celu. Jeżeli nie jesteś w stanie 
                    całkowicie wyeliminować słodyczy ze swojej diety, poszukaj zdrowszych alternatyw np. z 
                    ograniczoną zawartością cukru i dodatków do żywności. Następnie zmniejszaj ich spożycie stopniowo 
                    i zamień je na świeże owoce. Dzięki temu Twoje podniebienie będzie nadal usatysfakcjonowane 
                    słodyczą, a przy tym dostarczysz organizmowi cennych składników odżywczych.
                </p>
            </Body>
            <Conclusions>
                <p>
                    Kiedy Ty sam wprowadzisz pierwsze zmiany w swoim sposobie żywienia, możesz 
                    zachęcić swoją motywacją także rodzinę. Staniesz się przykładem dla dzieci, a 
                    wspólne cele z partnerem ułatwią wam drogę do zmiany.
                </p>
            </Conclusions>
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
        margin-bottom: 1rem;
    }
  `;

  const Lead = styled.div`
    p{
        font-weight: 1000;
        font-size: 1.1rem;
    }
  `;
  const Body = styled.div`
    h6{
        font-size: 16px;
        font-weight: 500;
    }
    h5{
          font-size: 16px;
          margin-top: 1rem;
      }`;

  const Conclusions = styled.div``;

  export default Article2;