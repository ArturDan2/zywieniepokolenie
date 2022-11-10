import {React, useEffect} from 'react';
//styles
import styled from "styled-components";
//router
import {Link, useLocation, useParams} from "react-router-dom";



const Pagination = ({postsPerPage, totalPosts, setCurrentPage}) => {
    const {page} = useParams();
    const {pathname} = useLocation();
    const pageNumbers = [];

    useEffect(()=> {
        setCurrentPage(page)
    },[pathname]);


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    function currentHandler(number){
        let isCurrent = false;
        if(number == page){
            isCurrent = true
        }
        return isCurrent
    }

  return (
    <MainContainer>
        <CardList>
            {pageNumbers && pageNumbers.map((number) => {
                return <StyledLink key={number} to={`/articles/${number}`} current={currentHandler(number)}><li key={number}>{number}</li></StyledLink>
            })}
        </CardList>
    </MainContainer>
  )
}

const MainContainer = styled.div`
`
const CardList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`
const StyledLink = styled(Link)`
    background: ${(props) => props.current === true ? "#ffa4c9" : "white"};
    li{
        color: ${(props) => props.current === true ? "white" : "black"};
        font-size: 0.9rem;
        padding: 0.5rem;
    }
`

export default Pagination;