import {React, useEffect,useState} from "react";
//styles
import styled from "styled-components";
//components
import ArticleElement from "./Components/ArticleElement";
import ArticleNewestElement from "./Components/ArticleNewestElement";
import Pagination from "./Components/Pagination";
//router
import {useLocation} from "react-router-dom";
//logic
import { scrollToTop } from "../../GlobalFuncionality/GlobalFunctions";



const ArticleListPage = ({posts}) => {
    const {pathname} = useLocation();
    const [currentPage, setCurrentPage] = useState();
    const postsPerPage = 7;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    const [, ...withoutFirst] = currentPosts;

    useEffect(()=> {
        scrollToTop()
    },[pathname])



    return (
        <MainContainer>
            <h1>Artykuły</h1>
            <GridContainer>
                <ArticleNewestElement postData={currentPosts[0]}/>
                {withoutFirst.map((thumb) => {
                return <ArticleElement key={thumb.id} postData={thumb}/>
            })}
            </GridContainer>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage}/>
        </MainContainer>
    )
}

  //styled
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 10rem;
    h1{
        font-size: 5rem;
        margin-bottom: 2rem;
    }
    a{
        color: black;
    }
    @media (max-width: 1350px) {
        margin: 2rem 3rem 0;
        padding: 4rem 0rem 0;
    }
    @media (max-width: 940px) {
            padding-top: 6.5rem;
        }
    @media (max-width: 800px) {
        margin: 2rem 1.5rem;
        h1{
            margin-bottom: 0rem;
            font-size: 3rem;
        }
    }
  `;

const GridContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3,31.3%);
    column-gap: 3%;
    row-gap: 4rem;
    margin-bottom: 2.5rem;
    div{
        min-height: 0;
    }
    @media (max-width: 1240px) {
        grid-template-columns: repeat(2,48.5%);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1,100%);
        div{
            grid-column-start: 1;
            grid-column-end: 2;
        }
    }
    `;
  export default ArticleListPage;