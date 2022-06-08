import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import { getFirestore,addDoc, collection, getDocs } from 'firebase/firestore';

export const addPlayers = async(
  name: string,
  min: number,
  sec: number,
  totalTime: number
)=>{
  try{
    await addDoc(collection(getFirestore(),`players`),{
      name: name,
      min: min,
      sec: sec,
      totalTime: totalTime,
    });
  } catch(error){
    console.error('Error writing new message to Firebase Database', error);
  }
};

export const getPlayer = async()=>{
  let data:any[] = [];
  try{
    const fetchPlayer = await getDocs(collection(getFirestore(),'players'));
    fetchPlayer.docs.forEach((doc)=>{
      data.push({...doc.data()});
    });
  } catch(error){
    console.log(error);
  }
  return data;
}

export const getfirestoreCoord = async(name:string)=>{
    let data;
    try{
        const fetchData = await getDocs(collection(getFirestore(), `${name}`));
        fetchData.docs.forEach((doc) => {
          data = Object.assign({ ...doc.data() });
        });
        // console.log(data);
    } catch(error){
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