import React from 'react';
//styles
import styled from 'styled-components';
import { CommonMainContainer } from '../CommonStyling';
//logic
import { getTags } from '../../Funcionality/GetTagsFunction';

const TagsUploader = ({setNewPost, newPost, isErroredOut}) => {
    
    function extractTags (e){
        getTags(e, newPost, setNewPost)
    }

    return(
        <MainContainer>
            <label>Stwórz tagi</label>
            <input onBlur={extractTags} type="text" name="tag1" required isErroredOut={isErroredOut.toString()}></input>
            <input onBlur={extractTags} type="text" name="tag2" required isErroredOut={isErroredOut.toString()}></input>
            <input onBlur={extractTags} type="text" name="tag3" required isErroredOut={isErroredOut.toString()}></input>
            <>
                <span>*Te pola muszą zostać uzupełnione</span>
            </>
        </MainContainer>
    )
};

const MainContainer = styled.div`
    ${CommonMainContainer};
    row-gap: 1rem;
    position: relative;
    width: 45%;
    span{
        position: absolute;
        bottom: 4%;
    };
    input{
    }
    @media (max-width: 900px) {
      width: 100%;
    }
`
export default TagsUploader