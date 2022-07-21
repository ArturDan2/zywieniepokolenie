import * as React from "react";
import styled from "styled-components";


const Path = props => (
  <path
    fill="transparent"
    strokeWidth="2.5"
    stroke="#013A63"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isOpen, setIsOpen }) => (
  <StyledButton onClick={()=> {setIsOpen(!isOpen)}}>
    <svg width="24" height="24" viewBox="0 0 20 20">
      <Path
        d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }

      />
      <Path
        d="M 2 9.423 L 20 9.423"
        opacity={isOpen ? "0" : "1"}
      />
      <Path
        d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
      />
    </svg>
  </StyledButton>
);

const StyledButton = styled.button`
  display: none;
  @media (max-width: 940px) {
    z-index: 11;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    svg path{
    transition: 0.2s;
      }
    }

    
`