import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCTu3LjoHRE08sL-jhk8frclbeQaui88YI",
    authDomain: "zywienie-pokolenie.firebaseapp.com",
    projectId: "zywienie-pokolenie",
    storageBucket: "zywienie-pokolenie.appspot.com",
    messagingSenderId: "415545023081",
    appId: "1:415545023081:web:401fd9f1e469a3f303e0f8",
    measurementId: "G-3L60Y9B5P7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);

  //function getPosts

  export async function getPosts () {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post)
    })
  }
