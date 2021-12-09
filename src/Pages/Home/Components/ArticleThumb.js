import React from "react";
import styled from "styled-components";
import {Link, useSearchParams} from "react-router-dom";
import food from "./../img/food.jpg";
import { ArticlesContent } from "../../Article/ArticlesObjects";




const ArticleThumb = ({index, articleIndex, setArticleIndex}) => {
    // const extractedIndex = index.index - 1;
    
    
    function fixIndex(){
        const extendIndex = index.index;
        const fixedIndex = index - 1;
        return fixedIndex
    }


    function setIndexHandler(){
        setArticleIndex(fixIndex());
    }
    return (
        <MainContainer>
            <img src={food}></img>
                <Container1>
                    <Text>
                        <h3>{ArticlesContent[fixIndex()].title}</h3>
                        <p>{ArticlesContent[fixIndex()].articleThumb}</p>
                    </Text>
                    <span>
                        <Link to={"/article"}><button onClick={setIndexHandler}>Przeczytaj więcej...</button></Link>
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
    h3{
        margin-bottom: 1rem;
    }
    p{
        padding: 1rem 0rem;
    }
    img{
        height: 17rem;
        width: auto;
    }
    button{
        border: none;
        padding: 0.5rem 2rem;
        background: #013A63;
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 12rem;
        height: 2rem;
        :hover {
            background: #EF0061;
        }
    }
`
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 2rem;
`
const Text = styled.div`
    margin-left: rem;
`
  export default ArticleThumb;