import {React} from "react";
//styled
import styled from "styled-components";
//router
import {Link} from "react-router-dom";
//logic
import { getDate } from "../../../GlobalFuncionality/GlobalFunctions";
//components
import MainPictureComponent from "../../../GlobalComponents/MainPictureComponent";



const ArticleNewestElement = ({postData}) => {

    return (
        postData ?
        <MainContainer to={`/article/${postData.id}`}>
            <StyledMainPicture className="newest-element" postData={postData}/>
            <TextContainer>
                <h4>{getDate(postData)}</h4>
                <h2>{postData.title}</h2>
                <p>{postData.thumb}</p>
            </TextContainer>
        </MainContainer>
        : null
    )
  }

  //styled
  const MainContainer = styled(Link)`
    min-height: 18rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    grid-column-start: 1;
    grid-column-end: 4;
    @media (max-width: 1240px) {
        grid-column-start: 1;
        grid-column-end: 3;
        min-height: 25rem;
        flex-direction: column;
        margin-bottom: 0;
    };

    @media (max-width: 500px) {
        grid-column-start: 1;
        grid-column-end: 2;
        height: 26rem;
        margin: 0;
    }
  `;

  const StyledMainPicture = styled(MainPictureComponent)`
    background-position: right 10%;
    background-size: cover;
    width: 90vw;
    height: 16rem;
    overflow: hidden;
    @media (max-width: 1240px) {
        height: 22rem;
        width: 100%;
        background-position: right;
    };

    @media (max-width: 600px) {
        max-height: 12rem;
        width: 100%;
    }
  `;

  const TextContainer = styled.div`
    padding: 1rem 1.5rem ;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 2.5rem;
        margin: 1rem 0rem;
    }
    h4{
        color: #6b6b6b;
        font-weight: 200;
    }
    p{
        font-size: 18px;
    }
    @media (max-width: 1240px) {
        margin: 0;
        padding: 0.5rem 0;
        h2{
            font-size: 2rem;
        }
        h4{
            padding: 0.3rem 0rem;
        }
    };
    @media (max-width: 600px) {
        width: 100%;
        margin: 0.5rem 0rem;
        h2{
            font-size: 1.3rem;
            min-height: 3rem;
            margin: 0.5rem 0rem;
        }
        p{
            font-size: 1rem;
        }
    }
  `;
  export default ArticleNewestElement;