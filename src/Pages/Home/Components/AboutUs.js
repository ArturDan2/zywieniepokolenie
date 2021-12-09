import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return(
        <MainContainer>
            <h3>O nas</h3>
            <p>Jesteśmy studentami dietetyki trzeciego roku Uniwersytetu Przyrodniczego w Poznaniu. Nasze zainteresowanie zdrowym stylem życia rozpoczęło się w wieku nastoletnim. Poza dziedziną żywienia, jesteśmy osobami pełnymi pasji. Przywiązujemy dużą wagę do tego co trafia na nasz talerz, a zdobytą wiedzą pragniemy dzielić się z innymi. W ramach edukacji żywieniowej przygotowaliśmy kampanię społeczną.</p>
            <p>Kampania ,, Żywienie z pokolenia na pokolenie” powstała 8 grudnia 2021r. Jest to pierwsza, przygotowana przez nas kampania społeczna. Edukujemy w niej młodych rodziców, którzy pragną wprowadzić zdrowe nawyki żywieniowe w życie swoich dzieci.</p> 
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
display: flex;
min-height: 45vh;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2.5rem 3rem;
margin: -2rem 10rem;
h3{
    color: #013a63;
    padding: 0.3rem 0.5rem;
    margin-bottom: 1rem;
    font-size: 28px;
}
p{
    color: #535353;
    margin: 1rem;
}; 

@media (max-width: 1350px) {
        margin: -2rem 4rem;
        padding: 4rem 3rem;
    }
`
export default AboutUs;