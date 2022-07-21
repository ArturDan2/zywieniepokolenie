import React, {useState, useEffect} from "react";
//styles
import styled from "styled-components";
//logic
import { getPics } from "../Funcionality/getPicsFunction";



const ArticleContent = ({postData}) => {
    
    const [body, setBody] = useState();
    const [url, setUrl] = useState([]);

    useEffect(() => {
      const data = postData;
      getPics(data).then((result) => {
          setUrl(result);
      });
     },[postData]);


     const urlHandler = () => {
       const newBody = postData.body?.replace("<PIC1/>", `<img src="${url[0]}" title="${postData.alts[1]}"></img>`).replace("<PIC2/>", `<img src="${url[1]}" title="${postData.alts[2]}"></img>`).replace("<PIC3/>", `<img src="${url[2]}" title="${postData.alts[3]}"></img>`);
       setBody(newBody);
     }

     setTimeout(urlHandler, 1000);

     return (
      <MainContainer>
        <Introduction dangerouslySetInnerHTML={{__html: postData.introduction}}/>
        <Paragraph dangerouslySetInnerHTML={{__html: body}}/>
        <Conclusion dangerouslySetInnerHTML={{__html: postData.conclusion}}/>
      </MainContainer>
    )
  }

  const MainContainer = styled.div`
    font-size: 16px;
    width: 60%;
    p{
      margin: 1.5rem 0;
    }
    ul{
      margin: 0.5rem 0;
    }
    li{
      list-style-type: disc;
      margin-left: 1rem;
    }
    h3{
      font-size: 16px;
      margin-top: 1.5rem;
    }
    @media (max-width: 1140px) {
          width: 70%;
    }
    @media (max-width: 940px) {
          width: 90%;
    }
  `;

  const Introduction = styled.p`
    font-size: 18px;
    font-weight: 600;
  `
  const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  img{
    align-self: center;
    height: 25rem;
    width: 40rem;
    margin: 2rem;
    object-fit: cover;
    @media (max-width: 500px) {
      padding: 0.7rem;
    }
  }
  `
  const Conclusion = styled.div`
    margin-top: 2rem;
  `


  export default ArticleContent;