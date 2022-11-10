import React from 'react';
import styled from 'styled-components';

import MainImageUploader from './Components/MainImageUploader';
import Instruction from './Components/Instruction';
import PostImageUploader from './Components/PostImageUploader';
import TagsUploader from './Components/TagsUploader';

const OtherData = ({setNewPost, newPost, isErroredOut}) => {
    return (
        <MainContainer>
                <UprightPanels className="other-container">
                    <MainImageUploader setNewPost={setNewPost} newPost={newPost} isErroredOut={isErroredOut}/>
                    <Instruction/>
                </UprightPanels>
                <HorizontalPanels className="other-container">
                    <PostImageUploader setNewPost={setNewPost} newPost={newPost} isErroredOut={isErroredOut}/>
                    <TagsUploader setNewPost={setNewPost} newPost={newPost} isErroredOut={isErroredOut}/>
                </HorizontalPanels>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-top: 1rem;
    column-gap: 1rem;
    @media (max-width: 1250px) {
      width: 85%;
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }
    @media (max-width: 600px) {
      width: 95%;
    }
    div.other-container{
        row-gap: 1rem;
        column-gap: 1rem;
    }
`
const UprightPanels = styled.div`
        flex-direction: column;
        display: flex;
    `
const HorizontalPanels = styled.div`
    flex-direction: row;
    display: flex;
    @media (max-width: 900px) {
      flex-direction: column;
    }
`
export default OtherData
