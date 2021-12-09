import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
     <MainContainer>
       <ul>
         <StyledLink to="/about"><li><a>O nas</a></li></StyledLink>
         <StyledLink to="/goal"><li><a>Nasz cel</a></li></StyledLink>
         <StyledLink to="/articles"><li><a>Artykuły</a></li></StyledLink>
         <StyledLink to="/contact"><li><a>Kontakt</a></li></StyledLink>
       </ul>
     </MainContainer>
    )
  }
  
  const MainContainer = styled.div`
    height: 30vh;
    background: #013a63;
    
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
  `;
  
  const StyledLink = styled(Link)`
    color: #ffffffb3;`
  export default Footer;