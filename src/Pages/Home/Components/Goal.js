import React from "react";
import styled from "styled-components";
import background from "./../img/background.jpeg"
//components


const Goal = () => {
    return(
        <MainContainer img={background}>
            <GoalContainer>
                <h3>Nasz cel</h3>
                <p>Naszym celem jest edukacja młodych rodziców w zakresie nawyków żywieniowych. Pragniemy przeprowadzić ich przez praktyczne wskazówki, które pomogą im zadbać nawyki żywieniowe i swoich dzieci. W ramach kampanii przygotowaliśmy materiały, które będą niezbędne w podjęciu pierwszych kroków do zmiany.</p>
            </GoalContainer>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const GoalContainer = styled.div`
    width: 35rem;
    height: 20rem;
    background: #013a63;
    display: flex;
    margin-top: 5rem;
    margin-right: 3rem;
    color: white;
    padding: 3rem;
    justify-content: center;
    align-items: center;
    p{
        margin: 2rem;
    }
    h3{
        font-size: 32px;
    }
`
export default Goal;