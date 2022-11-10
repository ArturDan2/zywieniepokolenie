// adminpanel
import {useState} from 'react';
import { scrollToTop } from '../../GlobalFuncionality/GlobalFunctions';
import { db, storage } from "../../firebase";
import {ref, uploadBytes} from "firebase/storage";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import { v4 as uuid } from 'uuid';
import { postTemplate } from './PostTemplate';

const useUploadPost = () => {
    const unique_id = uuid();
    const date = new Date();

    const [isErroredOut, setIsErroredOut] = useState(false);
    const [submitedSuccesfully, setSubmitedSuccesfully] = useState(false);
    const [animIsActive, setAnimIsActive] = useState(false);
    const [uploadMessage, setUploadMessage] = useState()
    const [newPost, setNewPost] = useState(postTemplate);


    const postPic = (id) => {
        const bannerRef = ref(storage, `${id}/bannerpic/${newPost.bannerPicture.file.name}`);
        uploadBytes(bannerRef, newPost.bannerPicture.file);

        const picture1 = newPost.postPictures.picture1.file;
            if(picture1 !== null) {
                const picture1Ref = ref(storage, `${id}/contentpic/${picture1.name}`);
            uploadBytes(picture1Ref, picture1);
            }

        const picture2 = newPost.postPictures.picture2.file;
        if(picture2 !== null){
            const picture2Ref = ref(storage, `${id}/contentpic/${picture2.name}`);
            uploadBytes(picture2Ref, picture2);
        }

        const picture3 = newPost.postPictures.picture3.file;
        if(picture3 !== null){
            const picture3Ref = ref(storage, `${id}/contentpic/${picture3.name}`);
            uploadBytes(picture3Ref, picture3);
        }
    }


    const addPostHandler = (e) => {
        e.preventDefault();
        const formIsValid = e.target.parentElement.parentElement.checkValidity();

        const handleError = () => {
            setUploadMessage('Nie udało się udostępnić artykułu!');
            setIsErroredOut(true);
            setSubmitedSuccesfully(false);
            setAnimIsActive(true);
            setTimeout(()=>{setAnimIsActive(false); scrollToTop()}, 2000);
        }

        const uploadData = () => {
            const collectData = async () =>{
                const postPictureKeys = Object.keys(newPost.postPictures);
                let postPicturesFiles = [];
                let allAlts = [];
                postPictureKeys.map((key) => {
                    if(newPost.postPictures[key].file !== null){
                        postPicturesFiles.push(newPost.postPictures[key].file.name);
                        allAlts.push(newPost.postPictures[key].alt);
                    }
                });
                allAlts.unshift(newPost.bannerPicture.alt);


                try{
                    await setDoc(doc(db,"posts", unique_id), {
                        title: newPost.title,
                        subtitle: newPost.subtitle,
                        thumb: newPost.thumb,
                        introduction: newPost.introduction,
                        body: newPost.body,
                        conclusion: newPost.conclusion,
                        tags: newPost.tags,
                        date: `${date.getDay()}.${date.getUTCMonth()}.${date.getFullYear()}`,
                        bannerPicture: newPost.bannerPicture.file.name,
                        timestamp: serverTimestamp(),
                        postPictures: postPicturesFiles,
                        alts: allAlts,
                        id: unique_id,
                    });
                    postPic(unique_id);
                    e.target.parentElement.parentElement.reset();
                    setUploadMessage('Artykuł udostępniony pomyślnie!');
                    setSubmitedSuccesfully(true);
                    setIsErroredOut(false);
                    setAnimIsActive(true);
                    setTimeout(()=>{setAnimIsActive(false); scrollToTop()}, 2000);
                }catch(error){
                    handleError()
                }
            }

            const cleanData = () =>{
                setNewPost(
                    postTemplate
                );
            }
            collectData();
            cleanData();
        };

        if(formIsValid){
            uploadData()
        }else{
            handleError()
        }

    }
    return {newPost, setNewPost, submitedSuccesfully, animIsActive, isErroredOut, uploadMessage, addPostHandler}
}

export default useUploadPost