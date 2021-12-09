import React from "react";
import styled from "styled-components";
//image
import family from "./../img/family.png"

const BannerComponent = () => {
    return(
        <MainContainer>
                <h2>Żywienie z pokolenia na pokolenie.</h2>
                <img src={family}></img>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0rem 15rem 0rem;
    background: #d4f2fc;
    h2{
        font-size: 54px;
        color: #013a63;
        margin-bottom: 8rem;
    }
    img{
        height: 22rem;
        width: auto;
    }
    
    @media (max-width: 1400px) {
        h2{
            margin: 5rem 0rem;
        }
    };
    @media (max-width: 1200px) {
        padding: 0rem 10rem 0rem;
        h2{
            font-size: 58px;
           }
        img{
            height: 20rem;
        };
    }
    @media (max-width: 1050px) {
        padding: 0rem 5rem 0rem;
    }
    @media (max-width: 875px) {
        
        h2{
            font-size: 44px;
        }
    }
`
export default BannerComponent;