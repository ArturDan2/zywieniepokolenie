import { getStorage, ref, getDownloadURL  } from "firebase/storage";



    export const getPics = async(postRef) => {
        const post = await postRef;
        const storage = getStorage();
        let newBody = [];
        await post.postPictures?.map(async (name) => {
            const postPicRef = ref(storage, `${post.id}/contentpic/${name}`);
            const url = await getDownloadURL(postPicRef);
            if(name === post.postPictures[0]){
                newBody.splice(0,0,url)
            }else if(name === post.postPictures[1]){
                newBody.splice(1,0,url)
            }else if(name === post.postPictures[2]){
                newBody.splice(2,0,url)
            }
        });
        return newBody
    }
