import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore';



export const getfirestoreCoord = async(name:string)=>{
    let data;
    try{
        const fetchData = await getDocs(collection(getFirestore(), `${name}`));
        fetchData.docs.forEach((doc) => {
          data = Object.assign({ ...doc.data() });
        });
    } catch(error){
        console.log(data);
        console.log(error);
    }
    return data;
};

const firebaseConfig = {
  apiKey: "AIzaSyBuuNCahiGi-W92Zm0v5a97VvkYGA5v8AE",
  authDomain: "where-is-wally-a11be.firebaseapp.com",
  projectId: "where-is-wally-a11be",
  storageBucket: "where-is-wally-a11be.appspot.com",
  messagingSenderId: "526955909728",
  appId: "1:526955909728:web:488f5dea906f1841a8e905"
};


initializeApp(firebaseConfig);