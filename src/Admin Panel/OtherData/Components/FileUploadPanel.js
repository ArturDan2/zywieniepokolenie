import React,{useState} from 'react';
import styled from 'styled-components';

const FileUploadPanel = ({id, newPost, setNewPost, name, setErr}) => {

  const [altRequired, setAltRequired] = useState(false);
  
  function onFileChange (e) {
    setErr(null)

    const uploadPostState = () =>{
      switch(name){
        case 'picture1': 
        setNewPost((prevState) => ({
          ...prevState,
          postPictures: {
              ...newPost.postPictures, [name]: {
                  ...newPost.postPictures.picture1, file: e.target.value ? e.target.files[0] : null
              }
          }
      })
      );
        break;
        case 'picture2': 
        setNewPost((prevState) => ({
          ...prevState,
          postPictures: {
              ...newPost.postPictures, [name]: {
                  ...newPost.postPictures.picture2, file: e.target.value ? e.target.files[0] : null
              }
          }
      })
      );
      break;
      case 'picture3':
        setNewPost((prevState) => ({
          ...prevState,
          postPictures: {
              ...newPost.postPictures, [name]: {
                  ...newPost.postPictures.picture3, file: e.target.value ? e.target.files[0] : null
              }
          }
      })
      );
      break;
      default: return;
      }
    }

    function checkIfEmpty(){
      const getPreviousInputs = (x) =>{
         return e.target.parentElement.parentElement.children[x].children[0]
      }

      getPreviousInputs(0).style.color = "black"
      getPreviousInputs(1).style.color = "black"
      getPreviousInputs(2).style.color = "black"

      const checkIfPrevIsEmpty = () => {
          if(e.target.id === "img2" && getPreviousInputs(0).value === ''){
              e.target.value = null;
              e.target.style.color = "red";
              setErr("*Pola powinny zostać uzupełnione w odpowiedniej kolejności");
              return true
          }else if((e.target.id === "img3" && getPreviousInputs(1).value === '') || getPreviousInputs(0).value === ''){
              e.target.value = null;
              e.target.style.color = "red";
              setErr("*Pola powinny zostać uzupełnione w odpowiedniej kolejności");
              return true
          }else{
              return false
          }
      }
      checkIfPrevIsEmpty()
    }

    function makeAltRequired(){
      if(e.target.value === ''){
        setAltRequired(false)
      }else{
        setAltRequired(true)
      }
    }

    checkIfEmpty();
    uploadPostState();
    makeAltRequired();
  }

  function onAltChange(e){
    switch(name){
      case 'picture1':
      setNewPost((prevState) => ({
        ...prevState,
        postPictures: {
            ...newPost.postPictures, [name]: {
                ...newPost.postPictures.picture1, alt: e.target.value
            }
        }
    })
    );
      break;
      case 'picture2': 
      setNewPost((prevState) => ({
        ...prevState,
        postPictures: {
            ...newPost.postPictures, [name]: {
                ...newPost.postPictures.picture2, alt: e.target.value
            }
        }
    })
    );
    break;
    case 'picture3':
      setNewPost((prevState) => ({
        ...prevState,
        postPictures: {
            ...newPost.postPictures, [name]: {
                ...newPost.postPictures.picture3, alt: e.target.value
            }
        }
    })
    );
    break;
    default: return;
    }
  }

  return (
    <StyledFileUploadPanel>
        <UploadButton onChange={onFileChange} type="file" accept="image/*" id={"img"+id} required={altRequired}></UploadButton>
        <input type="text" placeholder="Krótki opis zdjęcia..." id={"alt"+id} required={altRequired} onBlur={onAltChange}></input>
        <span>Uzupełnij krótki opis zdjęcia</span>
    </StyledFileUploadPanel>
  )
}

const StyledFileUploadPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input{
        width: 80%;
    }
  span{
    position: absolute;
    display: none;
    bottom: -18%;
  }
  input:invalid ~ span{
      display: block
  }
`
const UploadButton = styled.input`
    width: 80%;
`
export default FileUploadPanel