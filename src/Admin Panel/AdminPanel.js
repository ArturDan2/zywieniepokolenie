import {React} from 'react';
//styles
import styled from "styled-components";
//components
import OtherData from './OtherData/OtherData';
import TextCreator from './TextCreator/TextCreator';
//logic
import useUploadPost from './Funcionality/useUploadPost';


const AdminPanel = () => {

    const {newPost, setNewPost, submitedSuccesfully, animIsActive, isErroredOut, uploadMessage, addPostHandler} = useUploadPost();

    return (
        <MainContainer submitedSuccesfully={submitedSuccesfully} animIsActive={animIsActive}>
            <CreateField>
                <TextCreator newPost={newPost} setNewPost={setNewPost} isErroredOut={isErroredOut}/>
                <OtherData setNewPost={setNewPost} newPost={newPost} isErroredOut={isErroredOut}/>
            </CreateField>
            <div class="button-container">
                <CreateArticle type="submit" onClick={addPostHandler} submitedSuccesfully={submitedSuccesfully} animIsActive={animIsActive}>Create Article</CreateArticle>
                <span class="upload-message">{uploadMessage}</span>
            </div>
        </MainContainer>
    )
}

const MainContainer = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    overflow: hidden;
    @media (max-width: 940px) {
      padding-top: 6.5rem;
    };

    div.button-container{
        position: relative;
        align-content: center;
        display: flex;
        flex-direction: column ;
    };

    span.upload-message{
        position: absolute;
        align-self: center;
        top: 80%;
        color: ${props => props.submitedSuccesfully ? "#62dc62" : "red"};
        transform: scale(0.5);
        opacity: 0%;
        animation: ${props => props.animIsActive ? "upload-message 2s" : ""};
        transition: 1s transform ease-out;
    };

    @keyframes upload-message{
        0%{
            transform: scale(0.5);
            opacity: 0%;
        }
        50%{
            transform: scale(1);
            opacity: 100%;
        }
        70%{
            transform: scale(1);
            opacity: 100%;
        }
        100%{
            transform: scale(0);
            opacity: 0%;
        }
    }
`

const CreateField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input{
        padding: 0.5rem 1rem;
    }
    textarea{
        padding: 0.5rem 1rem;
    }
`
const CreateArticle = styled.button`
    margin: 3rem;
    padding: 2rem;
    width: 12rem;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: #b9b9b9;
    position: relative;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 2;
    overflow: hidden;
    :hover{
        background: #ff97c0;
        font-size: 1.15rem;
    }
    
    &::after{
        background-color: ${props => props.submitedSuccesfully ? "#62dc62" : "red"};
        content: '';
        display: block;
        height: 130%;
        width: 130%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-100%, 0);
        transform-origin: top left;
        transition: 1s transform ease-out;
        animation: ${props => props.animIsActive ? "button-anim 0.9s" : ""};
        will-change: transform;
        z-index: -1;
    };


    @keyframes button-anim{
            0%{
                transform: translate(-100,0)
            }
            50%{
                transform: translate(0,0)
            }
            100%{
                transform: translate(-100,0)
            }
        };

`
export default AdminPanel
