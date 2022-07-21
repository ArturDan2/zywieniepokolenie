
    export const getTags = (e, newPost, setNewPost) =>{
        if(e.target.name === "tag1"){
            setNewPost((prevState) => ({
                ...prevState,
                tags: {...newPost.tags, tag1: e.target.value}
            }))
        }else if(e.target.name === "tag2"){
            setNewPost((prevState) => ({
                ...prevState,
                tags: {...newPost.tags, tag2: e.target.value}
            }))
        }else if(e.target.name === "tag3"){
            setNewPost((prevState) => ({
                ...prevState,
                tags: {...newPost.tags, tag3: e.target.value}
            }))
        }
       }

