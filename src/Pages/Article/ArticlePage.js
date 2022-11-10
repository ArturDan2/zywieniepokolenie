import React, { useEffect } from "react";
//styles
import styled from "styled-components";
//components
import Heading from "./Components/Heading";
import ArticleContent from "./Components/ArticleContent";
//router
import { useLocation, useParams } from "react-router-dom";
//logic
import { scrollToTop } from "../../GlobalFuncionality/GlobalFunctions";




const Article = ({posts}) => {
  const {pathname} = useLocation();
  const {postId} = useParams();


  const extractPost = () => {
    let post = {};
    posts.map((postData) => {
      if(postData.id === postId){
        post = postData;
      }
    })
    return post;
  };

  const postData = extractPost();

    

    useEffect(()=> {
        scrollToTop()
    },[pathname]);

    return (
        <MainContainer>
          <Heading postData={postData}/>
          <ArticleContent postData={postData}/>
        </MainContainer>
    )
  }

  //styled
  const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: 940px) {
      margin-top: 20vh;
    }
  `;
  export default Article;