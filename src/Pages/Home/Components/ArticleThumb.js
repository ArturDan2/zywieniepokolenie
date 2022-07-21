import {React} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//Components
import MainPictureComponent from "../../../GlobalComponents/MainPictureComponent";





const ArticleThumb = ({postData}) => {

    return (
        <MainContainer>
                <StyledMainPicture className="article-thumb" postData={postData}/>
                <Container1>
                    <Text>
                        <h3>{postData.title}</h3>
                        <p>{postData.thumb}</p>
                    </Text>
                    <span>
                        <Link to={`/article/${postData.id}`}><button>Przeczytaj więcej...</button></Link>
                    </span>
                </Container1>
        </MainContainer>
    );
  };
  
  //styles
  const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #D4F2FC;
    margin: 2rem 0rem;
    height: 16rem;
    width: 70vw;
    max-width: 80rem ;
    h3{
        margin-bottom: 1rem;
    }
    p{
        padding: 1rem 0rem;
    }
    button{
        border: none;
        padding: 0.5rem 1rem;
        background: #013A63;
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 12rem;
        height: 2rem;
        margin: 1.5rem;
        :hover {
            background: #EF0061;
        }
    }
    @media (max-width: 1125px) {
        width: 80vw;
        height: 17rem;
    }
    @media (max-width: 980px) {
        flex-direction: column;
        height: 33rem;
        span{
        padding-top: 1rem;
        }
        button{
            margin: 0;
        }
    }
    @media (max-width: 600px) {
        width: 90vw;
        h3{
            margin: 0;
        }button{
            margin-top: 1rem;
        }
    }
`

const StyledMainPicture = styled(MainPictureComponent)`
    background-position: center;
    background-size: cover;
    width: 40%;
    height: 100%;
    overflow: hidden;
    @media (max-width: 1250px) {
        width: 50%
    }
    @media (max-width: 980px) {
        margin-bottom: 0rem;
        height: 70%;
        width: 100%
    }
    @media (max-width: 500px) {
        height: 55%;
    }
`
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 2rem;
    width: 65%;
    height: 15rem;
    overflow: auto;
    @media (max-width: 980px) {
        width: 85%;
        margin: 1rem;
        align-items: center;
        justify-content: space-evenly ;
        height: 80%;
    }
`
const Text = styled.div`
    height: 10rem;
    padding-top: 2rem;
    @media (max-width: 980px) {
        padding: 0;
        height: 10rem ;
        width: 100%;
        text-align: center;
    }
`
  export default ArticleThumb;