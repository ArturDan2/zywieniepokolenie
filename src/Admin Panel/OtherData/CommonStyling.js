
export const CommonMainContainer = () => `
padding: 4rem 1rem;
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0px 10px 10px #00000018;


input[type=file]::-ms-browse {
    background-color: #ef0060;
    border: none;
    color: white;
    height: 1.5rem;
    cursor: pointer;
}

input[type=file]::-webkit-file-upload-button {
    background-color: #ef0060;
    border: none;
    color: white;
    height: 1.5rem;
    cursor: pointer;
}

input[type=file]::file-selector-button {
    background-color: #ef0060;
    border: none;
    color: white;
    height: 1.5rem;
    cursor: pointer;
}

label{
    margin: 0.7rem 0;
}
input{
    outline: none;
    height: 2rem;
    margin: 0.3rem;
    width: 80%;
    @media (max-width: 900px) {
        width: 40%;
      }
}

span{
    font-size: 0.8rem;
    color: red;
    margin: 0.2rem;
    display: none;
  }

  input:invalid[isErroredOut="true"] ~ span{
      display: block
  }
`