import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
     <MainContainer>
       <ul>
         <StyledLink to="/about"><li>O nas</li></StyledLink>
         <StyledLink to="/goal"><li>Nasz cel</li></StyledLink>
         <StyledLink to="/articles-section"><li>Artykuły</li></StyledLink>
         <StyledLink to="/contact"><li>Kontakt</li></StyledLink>
       </ul>
     </MainContainer>
    )
  }
  
  const MainContainer = styled.div`
    height: 30vh;
    background: #013a63;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      display: flex;
      flex-direction: row;
    }
    li{
      margin: 2rem 1.5rem 4rem;
      cursor: pointer;
    }
    @media (max-width: 1350px) {
        margin-top: 4.5rem;
    }
    @media (max-width: 600px) {
        margin-top: 0rem;
    }
  `;
  
  const StyledLink = styled(Link)`
    color: #ffffffb3;`
  export default Footer;