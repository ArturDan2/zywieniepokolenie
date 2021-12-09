import React from "react";
import styled from "styled-components";
import ScrollToTop from "../../utils";
import grandma from "../Home/img/grandma.jpg"



const Article1 = (articleIndex) => {
  console.log(articleIndex.articleIndex);
    return (
        <MainContainer>
          <ScrollToTop/>
          <Heading>
            <h4>Data publikacji: 8 grudzień, 2021</h4>
            <h2>Schabowy babci Krysi w zdrowszym wydaniu</h2>
            <h3>Jak zmienić typowe polskie danie w zdrowy obiad?</h3>
            <Tags>
                <ul>
                    <li>żywienie</li>
                    <li>przepis</li>
                    <li>gotowanie</li>
                    <li>porada</li>
                </ul>
            </Tags>
            <BannerContainer>
              <img src={grandma}/>
            </BannerContainer>
          </Heading>

          <ArticleContent> 
            <Lead>
                <p> Wychowanie to całokształt wpływów wychowawcy na wychowanka. Jednym z obszarów wychowania jest sposób żywienia.
                    Rodzice już od pierwszych miesięcy życia dziecka implementują w jego życie nawyki żywieniowe. 
                    Jednak rodzinne przyzwyczajenia nie zawsze sprzyjają utrzymaniu racjonalnej diety wśród dzieci.</p>
            </Lead>
            <Body>
                <p>Niedzielny obiad, rodzina zbiera się przy wspólnym stole, a na talerzach kotlet schabowy. Zdecydowanie kotlet schabowy 
                    jest jedną z największych miłości Polek i Polaków. Nie jest on jednak synonimem zdrowego odżywiania. Czy trzeba zupełnie z 
                    niego rezygnować? Niekoniecznie! O ile będzie on przygotowany w zdrowszym wydaniu. Należy pamiętać, aby mimo to taki kotlet 
                    schabowy nie stał się codziennym obiadem. Mięso wieprzowe nie należy do najchudszych mięs i powinny z niego zrezygnować osoby 
                    z otyłością, dyslipidemią, nadciśnieniem tętniczym krwi czy miażdżycą.</p>
                <p>
                Odnosząc się do artykułu o tym jak wprowadzić zdrowe nawyki żywieniowe, wiemy już, że najlepiej rozpocząć zmianę od małych kroków. Wprowadzenie innej techniki kulinarnej 
                niż dotychczas przy przygotowywaniu potrawy może stanowić wielką różnicę dla naszego zdrowia.
                </p>
                <h5>Co można zmienić?</h5>
                <ul>
                    <li>1. Zamień pszenną bułkę tartą na otręby np. owsiane, mąkę pełnoziarnistą i płatki migdałów.</li>
                    <li>2. Zamień smażenie na pieczenie.</li>
                    <li>3. Dodaj porcję warzyw do obiadu.</li>
                </ul>
                <h5>Przepis na schabowego w zdrowszym wydaniu (porcja dla 4 osób):</h5>
                <h5>Składniki:</h5>
                <ul>
                    <li>400g schabu</li>
                    <li>2 szklanki mleka 1,5%</li>
                    <li>1 cebula</li>
                    <li>2 jaja</li>
                    <li>3 łyżki otrębów owsianych</li>
                    <li>2 łyżki migdałów</li>
                    <li>3 łyżki mąki pełnoziarnistej </li>
                    <li>2 łyżeczki musztardy</li>
                    <li>szczypta soli</li>
                    <li>szczypta pieprzu</li>
                </ul>
                <h5>Sposób przygotowania:</h5>
                    <ul>
                        <li>1. Plastry schabu wkładamy do mleka z plastrami cebuli solą i pieprzem na minimum 1.5h</li>
                        <li>2. Wyjmujemy i osuszamy, rozbijamy mięso tłuczkiem między folią spożywczą do odpowiedniej grubości, solimy, pieprzymy i smarujemy musztardą.</li>
                        <li>3. Na talerz wysypujemy trochę mąki, a na drugim talerzu mieszamy otręby i płatki migdałów, w miseczce roztrzepujemy białka.</li>
                        <li>4. Panierujemy mięso w mące, następnie w białku i otrębach. Pieczemy w piekarniku rozgrzanym do 220* na papierze do pieczenia przez 12 minut.</li>
                        <li></li>
                    </ul>
                <p>I gotowe!</p>

            </Body>
            <Conclusion>

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
      h5{
          font-size: 16px;
          margin-top: 1rem;
      }
  `
  const Conclusion = styled.div`
      
  `

  export default Article1;