import React from "react";
//components
import ArticleThumb from "./ArticleThumb";
//styles
import styled from "styled-components";
//router
import {Link} from "react-router-dom";

const Articles = ({posts}, ref) => {
    
    const firstThree = posts && posts.slice(0,3); 
    
    return(
        <MainContainer ref={ref}>
            {firstThree && firstThree.map((thumb) => {
                return <ArticleThumb key={thumb.id} postData={thumb}/>
            })}
            <ShowMoreContainer>
               <Link to="/articles/1"><ShowMoreButton>Pokaż więcej artykułów</ShowMoreButton></Link>
            </ShowMoreContainer>
        </MainContainer>
    )
}
const forwardedArticles = React.forwardRef(Articles)

//styles
const MainContainer = styled.div`
    margin: 2rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        margin: 0;
    }
`

const ShowMoreButton = styled.button`
        padding: 0.3rem 0rem;
        font-size: 1.1rem;
        font-weight: 1000;
        background: none;
        border: none;
        border-bottom: 2px solid #013a6368;
        color: #013A63;
`
const ShowMoreContainer = styled.div`
    height: 4rem;
`
export default forwardedArticles;