import React from 'react';
import styled from "styled-components";

const FormTextarea = (props) => {
  
  const {label, onBlur, id, isErroredOut, ...textareaProps} = props;

  return (
    <Textarea>
        <label>{label}</label>
        <textarea {...textareaProps} onBlur={onBlur} required isErroredOut={isErroredOut.toString()}/>
        <span>*To pole musi zostać uzupełnione</span>
    </Textarea>
  )
}

const Textarea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
    textarea{
        width: 70%;
        resize: none;
        outline: none;
        border: 1px solid #c4c4c4fc ;
        font-size: 1rem;
    }
    label{
        margin-bottom: 0.7rem;
    }
    span{
      position: absolute;
      font-size: 0.8rem;
      color: red;
      margin: 0.2rem;
      display: none;
      top: 100%;
    }
    textarea:invalid[isErroredOut="true"] + span{
      display: block
    }
    @media (max-width: 600px) {
      textarea{
          width: 80%;
      }
    }
    `
export default FormTextarea