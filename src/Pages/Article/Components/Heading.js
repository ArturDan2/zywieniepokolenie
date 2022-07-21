import {React} from "react";
import styled from "styled-components";
import { getDate } from "../../../GlobalFuncionality/GlobalFunctions";
import MainPictureComponent from "../../../GlobalComponents/MainPictureComponent";

const Heading = ({postData}) => {


    const tags = postData.tags;

       return (
        postData ?
        <MainContainer>
            <h4>{getDate(postData)}</h4>
            <h2>{postData.title}</h2>
            <h3>{postData.subtitle}</h3>
            <Tags>
                <ul>
                {postData.tags ? Object.values(tags).map((tag)=> {
                    return <li key={tag}>{tag}</li>
                }) : null}
                </ul>
            </Tags>
            <StyledMainPicture className="heading" postData={postData}/>
        </MainContainer>
        : null
    )
  }

  //styled
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2{
        font-size: 54px;
        margin: 0rem 2rem;
    };
    h3{
        margin: 1.5rem 2rem;
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

  const StyledMainPicture = styled(MainPictureComponent)`
    background-position: center;
    background-size: cover;
    margin: 3rem 0rem;
    width: 70vw;
    height: 30rem;
    overflow: hidden;
    @media (max-width: 1140px) {
      width: 100vw;
    }
  `
  export default Heading;