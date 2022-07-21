import React from "react";
//styles
import styled from "styled-components";
//icons
import {ArrowLeftCircle, ArrowRightCircle} from "@styled-icons/bootstrap";
//animations
//facts content
import { FactsObject } from "./FactsObject";
//sliders logic
import useFactsSliderLogic from "../Funcionality/useFactsSliderLogic";



const Facts = () => {

    const {slideLeftHandler, slideRightHandler, positioner} = useFactsSliderLogic()

    return(
        <MainContainer>
            <Container>
                <button onClick={slideLeftHandler} className="left">
                    <ArrowLeftCircle/>
                </button>
                <Fact positionLMR={positioner("left-top")} positionTB="top">
                    <img alt="x" src={FactsObject.Fact1.img}></img>
                    <h4>{FactsObject.Fact1.title}</h4>
                    <p>{FactsObject.Fact1.p}</p>
                </Fact>
                <Fact positionLMR={positioner("middle-top")} positionTB="top">
                    <img alt="x" src={FactsObject.Fact2.img}></img>
                    <h4>{FactsObject.Fact2.title}</h4>
                    <p>{FactsObject.Fact2.p}</p>
                </Fact>
                <Fact positionLMR={positioner("right-top")} positionTB="top">
                    <img alt="x" src={FactsObject.Fact3.img}></img>
                    <h4>{FactsObject.Fact3.title}</h4>
                    <p>{FactsObject.Fact3.p}</p>
                </Fact>
                <Fact positionLMR={positioner("left-bot")} positionTB="bottom">
                    <img alt="x" src={FactsObject.Fact6.img}></img>
                    <h4>{FactsObject.Fact6.title}</h4>
                    <p>{FactsObject.Fact6.p}</p>
                </Fact>
                <Fact positionLMR={positioner("middle-bot")} positionTB="bottom">
                    <img alt="x" src={FactsObject.Fact5.img}></img>
                    <h4>{FactsObject.Fact5.title}</h4>
                    <p>{FactsObject.Fact5.p}</p>
                </Fact>
                <Fact positionLMR={positioner("right-bot")} positionTB="bottom">
                    <img alt="x" src={FactsObject.Fact4.img}></img>
                    <h4>{FactsObject.Fact4.title}</h4>
                    <p>{FactsObject.Fact4.p}</p>
                </Fact>
                <button onClick={slideRightHandler}>
                    <ArrowRightCircle/>
                </button>
            </Container>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
        margin: 2rem 0rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1250px) {
            height: fit-content;
        }
    `
const Container = styled.div`
    padding: 0rem 5rem;
    display: flex;
    width: 100%;
    height: 33rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    button{
        height: 4rem;
        width: 4rem;
        cursor: pointer;
        border: none;
        background: none;
        color: #013a63;
        svg{
            pointer-events: none;
        }
    }
    @media (max-width: 1250px) {
            max-width: 100vw;
            flex-wrap: wrap;
            flex-direction: row;
            height: fit-content;
            justify-content: center;
            button{
                display: none;
            }
        }
`
const Fact = styled.div`
    z-index: ${props => props.positionLMR.z};
    height: 25rem;
    width: ${props => props.positionLMR.width + "rem"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.positionLMR.opacity + "%"};
    padding: 3rem;
    position: ${props => props.positionLMR.position};
    margin-left: auto;
    margin-right: auto;
    left: ${props => props.positionLMR.left + "%"};
    right: 0;
    text-align: center;
    top: ${props => props.positionLMR.top + "rem"};
    transition: z-index 0.001s, top 1s, left 1s, opacity 1s ;
    background: white;
    border-top: #EF0061 solid 10px;
    box-shadow: 0px 5px 5px #00000018;
    h4{
        font-size: 1.2rem;
        padding: 0.5rem 2rem;
        margin: 1rem 0rem;
        width: 12rem;
        height: 4rem;
        color: white;
        background: #0F0D35;
    }
    img{
        height: 8rem;
        width: auto;
    }
    p{
        width: 15rem;
        height: 8rem;
    }
    
    @media (max-width: 1250px) {
            position: relative;
            opacity: 100%;
            left: 0;
            top: 0;
            width: 20rem;
            margin: 2rem;
        }
`
export default Facts;