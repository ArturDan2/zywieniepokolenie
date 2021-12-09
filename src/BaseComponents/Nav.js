import React from "react";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";


const Nav = () => {

    return (
        <MainContainer>
            <Link to="/"><h1>żywieniepokolenie.pl</h1></Link>
            <StyledList>
                <div>
                  <Link to="/about"><li><a href="">O NAS</a></li></Link>
                  <span></span>
                </div>
                <div>
                  <Link to="/goal"><li><a href="">NASZ CEL</a></li></Link>
                  <span></span>
                </div>
                <div>
                  <Link to="/contact"><li><a href="">KONTAKT</a></li></Link>
                  <span></span>
                </div>
            </StyledList>
        </MainContainer>
    )
  }


//   styles

  const MainContainer = styled.div`
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;
    margin: 0 3%;
    h1{
        display: inline-block;
        background: #EF0061;
        color: white;
        padding: 0.5rem 0.5rem;
        font-family: 'Comfortaa', cursive;
        font-size: 26px;
        font-weight: 200;
    }
    div{
      display: flex;
      flex-direction: column;
      margin: 1rem;
      :hover{
        span{
          width: 100%;
        }
      }
        span{
          width: 0%;
          height: 3px;
          background: #ef00607d;
          transition: all 0.5s ease;
        }
    }
  `

  const StyledList = styled.li`
    display: flex;
    li{
        padding: 0.5rem 0rem;
        font-size: 20px;
        a{
            color: #7a7a7ac6;
            font-weight: 200;
        }
    }
  `
  export default Nav;