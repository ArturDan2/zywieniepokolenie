import React from "react";
import styled from "styled-components";
//image
import family from "./../img/family.png"



const BannerComponent = () => {
    return(
        <MainContainer>
                <div className="heading-container">
                    <h2>Żywienie z <span className="order-1">pokolenia</span> na <span className="order-2">pokolenie</span><span className="order-3">.</span></h2>
                </div>
                <img alt="zdjęcie rodziny" src={family}></img>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0rem 12.5rem;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,251,254,1) 18%, rgba(212,242,252,1) 100%);
    h2{
        font-size: 3.4rem;
        color: #013a63;
    }
    img{
        height: 22rem;
        width: auto;
        padding-top: 1rem;
    }
    div.heading-container{
        display: flex;
        height: 22rem;
        align-items: center;
        max-width: 45rem
    }
    span{
        display: inline-block;
        animation-name: span-anim;
        animation-duration: 0.7s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-fill-mode: backwards;
    }
    .order-1{
        animation-delay: 0s;
    }
    .order-2{
        animation-delay: 0.4s;
    }
    .order-3{
        animation-delay: 0.6s;
    }


    @media (max-width: 940px) {
            padding: 6.5rem 9rem 0;
        }
    
    @media (max-width: 830px) {
        padding: 6.5rem 7rem 0;
        h2{
            font-size: 3rem;
        }
        img{
            height: 18rem;
        }
        div.heading-container{
                height: 18rem ;
            }
    }

    @media (max-width: 700px) {
        padding: 6.5rem 2rem 0;
        h2{
            font-size: 3rem;
        }
    }
    @media (max-width: 550px) {
        align-items: center;
        justify-content: center;
        h2{
            font-size: 3.3rem;
            margin: 2rem 0rem;
        }
        img{
            display: none ;
        }
        div.heading-container{
            height: auto;
        }
    }

    @keyframes span-anim{
        0%{
            transform: scale(0) rotate(0deg);
        }
        38%{
            transform: scale(1) rotate(375deg);
        }
        68%{
            transform: scale(1) rotate(357deg);
        }
        100%{
            transform: scale(1) rotate(360deg);
        }
    }
`
export default BannerComponent;