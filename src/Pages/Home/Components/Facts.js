        import React, {useState} from "react";
import styled from "styled-components";
//icons
import {ArrowLeftCircle, ArrowRightCircle} from "@styled-icons/bootstrap";
//funcionality
import {FactsObject, FactSlotsPositionData, positioner} from "./FactsSliderFunctionality";
import background from "./../img/background.jpeg"


const Facts = () => {

    const [firstFactSlot, setFirstFactSlot] = useState(FactSlotsPositionData.FirstFactSlot);
    const [secondFactSlot, setSecondFactSlot] = useState(FactSlotsPositionData.SecondFactSlot);
    const [thirdFactSlot, setThirdFactSlot] = useState(FactSlotsPositionData.ThirdFactSlot);
    const [fourthFactSlot, setFourthFactSlot] = useState(FactSlotsPositionData.FourthFactSlot);
    const [fifthFactSlot, setFifthFactSlot] = useState(FactSlotsPositionData.FifthFactSlot);
    const [sixthFactSlot, setSixthFactSlot] = useState(FactSlotsPositionData.SixthFactSlot);


    function slideLeftHandler () {
        const saveFirst = firstFactSlot
        setFirstFactSlot(fourthFactSlot);
        setFourthFactSlot(fifthFactSlot);
        setFifthFactSlot(sixthFactSlot);
        setSixthFactSlot(thirdFactSlot);
        setThirdFactSlot(secondFactSlot);
        setSecondFactSlot(saveFirst);
    };

    function slideRightHandler() {
        const savedFirst = firstFactSlot;
        setFirstFactSlot(secondFactSlot);
        setSecondFactSlot(thirdFactSlot);
        setThirdFactSlot(sixthFactSlot);
        setSixthFactSlot(fifthFactSlot);
        setFifthFactSlot(fourthFactSlot);
        setFourthFactSlot(savedFirst);
    }

    return(
        <MainContainer>
            <Container>
                <button onClick={slideLeftHandler} className="left">
                    <ArrowLeftCircle/>
                </button>
                <Fact positionLMR={positioner("left-top", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="top">
                    <img src={FactsObject.Fact1.img}></img>
                    <h3>{FactsObject.Fact1.title}</h3>
                    <p>{FactsObject.Fact1.p}</p>
                </Fact>
                <Fact positionLMR={positioner("middle-top", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="top">
                    <img src={FactsObject.Fact2.img}></img>
                    <h3>{FactsObject.Fact2.title}</h3>
                    <p>{FactsObject.Fact2.p}</p>
                </Fact>
                <Fact positionLMR={positioner("right-top", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="top">
                    <img src={FactsObject.Fact3.img}></img>
                    <h3>{FactsObject.Fact3.title}</h3>
                    <p>{FactsObject.Fact3.p}</p>
                </Fact>
                <Fact positionLMR={positioner("left-bot", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="bottom">
                    <img src={FactsObject.Fact6.img}></img>
                    <h3>{FactsObject.Fact6.title}</h3>
                    <p>{FactsObject.Fact6.p}</p>
                </Fact>
                <Fact positionLMR={positioner("middle-bot", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="bottom">
                    <img src={FactsObject.Fact5.img}></img>
                    <h3>{FactsObject.Fact5.title}</h3>
                    <p>{FactsObject.Fact5.p}</p>
                </Fact>
                <Fact positionLMR={positioner("right-bot", firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot)} positionTB="bottom">
                    <img src={FactsObject.Fact4.img}></img>
                    <h3>{FactsObject.Fact4.title}</h3>
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
        position: relative;
        min-height: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
const Container = styled.div`
    padding: 5rem;
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
    h3{
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
`
export default Facts;