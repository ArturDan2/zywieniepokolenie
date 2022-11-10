import React from 'react';
import styled from 'styled-components';
import { CommonMainContainer } from '../CommonStyling';

const MainImageUploader = ({setNewPost, newPost, isErroredOut}) => {
    
    function onFileChange (e) {
        setNewPost((prevState) => ({
            ...prevState,
            bannerPicture: {
                ...newPost.bannerPicture,
                file: e.target.files[0],
            }
        })
        )
    }
    
    function altHandler (e) {
        setNewPost((prevState) => ({
            ...prevState,
            bannerPicture: {
                ...newPost.bannerPicture,
                alt: e.target.value,
            }
        })
        )
    }

    return(
        <MainContainer>
            <div></div>
            <label>Udostępnij zdjęcie główne (banner)</label>
            <input onChange={onFileChange} type="file" id="img" name="img" accept="image/*" required isErroredOut={isErroredOut.toString()}/>
            <input type="text" onBlur={altHandler} placeholder="Krótki opis zdjęcia..." required isErroredOut={isErroredOut.toString()}></input>
            <span>*Te pola muszą zostać uzupełnione</span>
        </MainContainer>
    )
};

const MainContainer = styled.div`
    ${CommonMainContainer};
    display: flex;
    row-gap: 1rem;
    position: relative;
    span{
        position: absolute;
        bottom: 4%;
    }
`

export default MainImageUploader;
