import {React, useState } from 'react';
import styled from 'styled-components';
import { CommonMainContainer } from '../CommonStyling';
import FileUploadPanel from './FileUploadPanel';


const PostImageUploader = ({setNewPost, newPost}) => {
    const [err, setErr] = useState(null);
    
    const imgUploadPanel = [
        {
            id: 1,
            name: "picture1",
        }, 
        {
            id:2,
            name: "picture2"
        },
        {
            id:3,
            name: "picture3"
        }
    ];
    

    async function altHandler(e){
        if(e.target.id === "alt1"){
            setNewPost((prevState) => ({
                ...prevState,
                postPictures: {
                    ...newPost.postPictures, picture1: {
                        ...newPost.postPictures.picture1, alt: e.target.value
                    }
                }
            })
            )
        }else if(e.target.id === "alt2"){
            setNewPost((prevState) => ({
                ...prevState,
                postPictures: {
                    ...newPost.postPictures, picture2: {
                        ...newPost.postPictures.picture2, alt: e.target.value
                    }
                }
            })
            )
        }else if(e.target.id === "alt3"){
            setNewPost((prevState) => ({
                ...prevState,
                postPictures: {
                    ...newPost.postPictures, picture3: {
                        ...newPost.postPictures.picture3, alt: `${e.target.value}`
                    }
                }
            })
            )
        }
    }
    

    return(
        <MainContainer err={err}>
            <label>Udostępnij zdjęcia do posta</label>
            <div>
                {
                    imgUploadPanel.map((uploadPanel)=>{
                        return <FileUploadPanel key={uploadPanel.id} id={uploadPanel.id} name={uploadPanel.name} altHandler={altHandler} newPost={newPost} setNewPost={setNewPost} setErr={setErr}></FileUploadPanel>
                    })
                }
            </div>
            <span class="order">{err}</span>
        </MainContainer>
    )
};
const MainContainer = styled.div`
    ${CommonMainContainer};
    row-gap: 1rem;
    position: relative;
    div{
        flex-direction: column;
        display: flex;
        row-gap: 1rem;
        width: 100%;
    }
    span.order{
        text-align: center;
        position: absolute;
        display: block;
        bottom: 2%;
    }
`



export default PostImageUploader;