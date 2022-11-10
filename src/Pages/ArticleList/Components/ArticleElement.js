import {React} from "react";
//styles
import styled from "styled-components";
//Router
import {Link} from "react-router-dom";
//logic
import { getDate } from "../../../GlobalFuncionality/GlobalFunctions";
//Components
import MainPictureComponent from "../../../GlobalComponents/MainPictureComponent";


const ArticleElement = ({postData}) => {

    return (
        postData ?
            <MainContainer>
                <Link to={`/article/${postData.id}`}>
                <StyledMainPicture className="article-element" postData={postData}/>
                <TextContainer>
                    <h4>{getDate(postData)}</h4>
                    <h2>{postData.title}</h2>
                    <p>{postData.thumb}</p>
                </TextContainer>
                </Link>
            </MainContainer>
        : null
    )
  }

  //styled
  const MainContainer = styled.div`
    min-height: 26rem;
  `;

  const StyledMainPicture = styled(MainPictureComponent)`
    background-position: center;
    background-size: cover;
    margin: 0;
    height: 13rem;
    overflow: hidden;
    @media (max-width: 690px) {
        height: 12rem;
    };
  `

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.1rem 0rem;
    h2{
        margin: 1rem 0rem;
        min-height: 3rem;
        font-size: 1.3rem;
    };

    h4{
        padding: 0.3rem 0rem;
        font-weight: 100;
        color: #6b6b6b;
    };

    p{
        min-height: 4rem;
        font-weight: 400;
        font-size: 16px;
    };

    @media (max-width: 1240px) {
        padding: 0.5rem 0rem;
        h2{
            margin: 0.5rem 0rem;
        }
    };
    
    @media (max-width: 720px) {
        margin: 0.5rem 0rem;
    };
    @media (max-width: 690px) {
        h2{
            font-size: 1.3rem;
        };
        p{
            font-size: 1rem;
        }
    };
    `;

  export default ArticleElement;