import React from 'react';
import styled from "styled-components";
import FormTextarea from './Components/FormTextarea';
import FormInput from './Components/FormInput';

const TextCreator = ({newPost, setNewPost, isErroredOut}) => {

  const inputs = [
    {
      id:"title",
      name: "title",
      type: "text",
      label: "Tytuł artykułu:",
      maxlength: "45"
    },
    {
      id: "subtitle",
      name: "subtitle",
      type: "text",
      label: "Podtytuł:",
      maxlength: "60",
    }
  ]

  const textareas = [
    {
      id:"thumb",
      name:"thumb",
      label:"Thumb:",
      cols:"3",
      rows:"6",
      maxlength: "250",
    },
    {
      id:"introduction",
      name:"introduction",
      label:"Wstęp artykułu:",
      cols:"3",
      rows:"10",
    },
    {
      id:"body",
      name:"body",
      label:"Główna treść artykułu:",
      cols:"3",
      rows:"30",
    },
    {
      id:"conclusion",
      name:"conclusion",
      label:"Zakończenie artykułu:",
      cols:"3",
      rows:"10",
    },
  ]

  function onBlur (e){
    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  return (
    <MainContainer>
        {inputs.map((input) => {
          return <FormInput key={input.id} {...input} value={newPost.name} onBlur={onBlur} isErroredOut={isErroredOut}/>
        })}
        {textareas.map((textarea) => {
           return <FormTextarea key={textarea.id} {...textarea} value={newPost.name} onBlur={onBlur} isErroredOut={isErroredOut}/>
        })}
    </MainContainer>
  )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: cetner;
    align-self: center;
    width: 60%;
    padding: 2rem 1rem;
    background: #ffffff;
    box-shadow: 0px 10px 10px #00000018;
    @media (max-width: 1250px) {
      width: 85%;
    }
    @media (max-width: 600px) {
      width: 95%;
      padding: 2rem 0.5rem;
    }
`

export default TextCreator