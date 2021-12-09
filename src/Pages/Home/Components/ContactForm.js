import React from "react";
import styled from 'styled-components';


const ContactForm = () =>{
    return (
     <MainContainer>
         <FormContainer>
            <h3>Masz <span>pytanie?</span><br/>Skontaktuj się z nami!</h3>
            <Inputs>
              <Input>
                <label>Imię:</label>
                <input type="text" name="fname"></input>
              </Input>
              <Input>
                <label for="theme">Temat wiadomości:</label>
                <input type="text" id="theme" name="theme"></input>
              </Input>
            </Inputs>
            <textarea rows="3" cols="3"></textarea>
            <SubmitInput type="submit"></SubmitInput>
         </FormContainer>
     </MainContainer>
    )
  }
  
  const MainContainer = styled.div`
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 32px;
    }
  `;

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    width: 40vw;
    min-height: 70vh;
    margin-bottom: 7rem;
    box-shadow: 0px 5px 5px #00000018;
    padding: 2rem 8rem;
    span{
      color: #EF0061;
    }
    textarea{
      resize: none;
      width: 100%;
      height: 10rem;
      outline: none;
      font-size: 1.1rem;
      margin-top: 2rem;
      padding: 0.5rem;
    }
    @media (max-width: 1250px) {
      padding: 2rem 6rem;
    }
  `;
  const Input = styled.div`
    display: flex;
    flex-direction: column;
    input{
      height: 2rem;
      width: 10rem;
      font-size: 1.2rem;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      @media (max-width: 1460px) {
        width: 8rem;
    };
    @media (max-width: 1380px) {
    margin-bottom: 0.7rem;
    }
    }
  `;
  
  const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 1380px) {
    flex-direction: column;
    }
  `;
  const SubmitInput = styled.input`
    width: 10rem;
    height: 2rem;
    margin-top: 2rem;
    background: #013a63;
    color: white;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    :hover{
      background: #EF0061;
    }

  `

  export default ContactForm;