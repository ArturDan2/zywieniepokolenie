import React from "react";
//styles
import styled from "styled-components";
import background from "./../img/background.jpeg"
//observer
import { useInView } from "react-intersection-observer";
//logic

const Goal = ({},ref) => {
    
    const [element, view] = useInView({threshold: 1, triggerOnce: true});
    


    return(
        <MainContainer img={background} ref={ref}>
            <GoalContainer className="goal-container" ref={element} view={view}>
                <h3>Nasz cel</h3>
                <p>Naszym celem jest edukacja młodych rodziców w zakresie nawyków żywieniowych. Pragniemy przeprowadzić ich przez praktyczne wskazówki, które pomogą im zadbać nawyki żywieniowe i swoich dzieci. W ramach kampanii przygotowaliśmy materiały, które będą niezbędne w podjęciu pierwszych kroków do zmiany.</p>
            </GoalContainer>
        </MainContainer>
    )
}
const forwardedGoal = React.forwardRef(Goal)

//styles
const MainContainer = styled.div`
    position: relative;
    margin: 5rem 0rem;
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 600px) {
        min-height: 70vh;
        align-items: center;
        background: white;
    }
`

const GoalContainer = styled.div`
    position: absolute;
    right: 30%;
    top: 15%;
    width: 35rem;
    height: 22rem;
    background: #013a63;
    display: flex;
    color: white;
    padding: 3rem;
    justify-content: center;
    align-items: center;
    animation-name: ${props => props.view ? "goal-anim" : ""};
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    p{
        margin: 2rem;
    }
    h3{
        font-size: 32px;
    }
    @media (max-width: 800px) {
        left: 1rem;
        animation-name: '';
    }
    @media (max-width: 600px) {
        left: 0;
        flex-direction: column;
        padding: 0;
        margin: 0;
        width: 100%;
        align-self: center;
        animation-name: "";
    }
    
    @keyframes goal-anim{
        0%{
            right: 30%;
        }
        40%{
            right: 10%;
        }
        60%{
            right: 13%;
        }
        80%{
            right: 10%;
        }
        100%{
            right: 10%;
        }
    }
`
export default forwardedGoal;