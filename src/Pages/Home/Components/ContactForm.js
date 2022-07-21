import React from "react";
//styles
import styled from 'styled-components';



const ContactForm = ({},ref) =>{
  
    return (
     <MainContainer ref={ref}>
         <FormContainer>
            <h3>Masz <span className="1">pytanie</span>
            <span className="2">?</span><br/>
            Skontaktuj się z nami!</h3>
            <Inputs>
              <Input>
                <label>Imię:</label>
                <input type="text" name="fname"></input>
              </Input>
              <Input>
                <label>Temat wiadomości:</label>
                <input type="text" id="theme" name="theme"></input>
              </Input>
            </Inputs>
            <textarea rows="3" cols="3"></textarea>
            <SubmitInput type="submit"></SubmitInput>
         </FormContainer>
     </MainContainer>
    )
  }
  
  const forwardedContactForm = React.forwardRef(ContactForm)

  const MainContainer = styled.div`
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
    h3{
        font-size: 32px;
    }
  `;

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    width: 40%;
    min-height: 70vh;
    margin-bottom: 7rem;
    box-shadow: 0px 5px 5px #00000018;
    padding: 2rem 8rem;
    span{
      color: #EF0061;
      display: inline-block;
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
    @media (max-width: 1240px) {
      width: 70%;
      padding: 2rem 6rem;
    }
    @media (max-width: 600px) {
      align-items: center;
      width: 90%;
      padding: 2rem 2rem;
    }
  `
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
      };
    }
    @media (max-width: 600px) {
        align-items: center;
        justify-content: center;
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
    transition: all 0.3s ease;
    :hover{
      background: #EF0061;
      transform: scale(1.05)
    }
    :active{
        transform: scale(0.95);
    }
    @media (max-width: 600px) {
        font-size: 1rem;
        width: 8rem;
        height: 2rem;
      }

  `

  export default forwardedContactForm;