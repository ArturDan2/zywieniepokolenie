import React,{useState, useEffect} from 'react';
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import styled from "styled-components";


const MainPictureComponent = ({postData, className}) => {

  
    const [bannerRef, setBannerRef] = useState(null);

    const getBanner = async (postRef) =>{
       const post = await postRef;
       const storage = getStorage();
       const bannerPicRef = ref(storage, `${post.id}/bannerpic/${post.bannerPicture}`);
       const url = await getDownloadURL(bannerPicRef);
       setBannerRef(url)
     };

    useEffect(()=> {
        setBannerRef(null);
        postData && getBanner(postData);
    },[postData]);

  return (
    postData ?
    <Banner className={className}imgUrl={bannerRef}>
    </Banner>
    : null
  )
}
const Banner = styled.div`
    background: url(${(props) => props.imgUrl});
    `;

export default MainPictureComponent;