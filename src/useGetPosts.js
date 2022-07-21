import {useState, useEffect} from 'react';
import { db } from "./firebase";
import {collection, getDocs, query, orderBy} from "firebase/firestore";

const useGetPosts = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const postsCollectionRef = collection(db, "posts");
        const q = query(postsCollectionRef, orderBy("timestamp"));
        const data = await getDocs(q);
        const posts = data.docs.map((doc) => ({...doc.data()}) )
        setPosts && setPosts(posts.reverse());
       };

       useEffect(() => {
        getPosts();
       },[]);

    return {posts}
}

export default useGetPosts