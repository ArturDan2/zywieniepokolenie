import {React, useState, useEffect} from "react";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import { MenuToggle } from "./NavToggle";




const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsOpen(false)
   },[pathname]);

    return (
        <MainContainer>
            <Link to="/"><h1>żywieniepokolenie.pl</h1></Link>
            <MenuContainer isOpen={isOpen}>
              <StyledList>
                  <div>
                    <Link to="/about"><li>O NAS</li></Link>
                    <span></span>
                  </div>
                  <div>
                    <Link to="/goal"><li>NASZ CEL</li></Link>
                    <span></span>
                  </div>
                  <div>
                    <Link to="/articles-section"><li>ARTYKUŁY</li></Link>
                    <span></span>
                  </div>
                  <div>
                    <Link to="/contact"><li>KONTAKT</li></Link>
                    <span></span>
                  </div>
              </StyledList>
            </MenuContainer>
            <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen}/>
        </MainContainer>
    )
  }


//   styles

  const MainContainer = styled.div`
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    h1{
        display: inline-block;
        background: #EF0061;
        color: white;
        padding: 0.5rem 0.5rem;
        font-family: 'Comfortaa', cursive;
        font-size: 26px;
        font-weight: 200;
    }

    @media (max-width: 940px) {
      position: fixed;
      width: 100%;
      height: 6.5rem;
      z-index: 4;
      background: white;
      margin: 0;
      padding: 1rem;
      box-shadow: 0px 1px 5px #00000018;
    }
  `

  const MenuContainer = styled.div`
    @media (max-width: 940px) {
        position: absolute;
        right: 0;
        top: -25rem;
        animation-name: ${props => props.isOpen ? "drop-down" : ""};
        animation-duration: 0.7s;
        animation-fill-mode: both;
        width: 100%;
        background: white;
        height: 20rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0px 3px 5px #00000018;
    }
  `
  const StyledList = styled.ul`
    display: flex;
    li{
        padding: 0.5rem 0rem;
        font-size: 20px;
        color: #7a7a7ac6;
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
          transition: width 0.5s ease;
        }
    }

    @media (max-width: 940px) {
        flex-direction: column;
        div{
          width: 100%;
        }
    }

    @keyframes drop-down{
        0%{
            top: -20rem;
        }
        50%{
          top: 1.5rem;
        }
        100%{
            top: 0rem;
        }
    }
  `

  export default Nav;