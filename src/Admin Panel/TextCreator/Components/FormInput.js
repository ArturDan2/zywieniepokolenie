import React from 'react';
//styles
import styled from "styled-components";

const FormInput = (props) => {
  
  const {label, onBlur, id, isErroredOut, ...inputProps} = props;
  return (
    <Input>
        <label>{label}</label>
        <input {...inputProps} onBlur={onBlur} required isErroredOut={isErroredOut.toString()}/>
        <span>*To pole musi zostać uzupełnione</span>
    </Input>
  )
}

const Input = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
    input{
        width: 70%;
        height: 2rem;
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


    input:invalid[isErroredOut="true"] + span{
      display: block
    }

    @media (max-width: 600px) {
      input {
          width: 80%;
      }
    }`

export default FormInput