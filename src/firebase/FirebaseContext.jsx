// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; // Import the necessary functions for Realtime Database

const Firebase = createContext(null);

export const useFirebase = () => {
  return useContext(Firebase);
};

const firebaseConfig = {
  apiKey: "AIzaSyCykcCxXdEMtA_1BGbv2ehAiQhb85dM5W8",
  authDomain: "caratwopointo.firebaseapp.com",
  projectId: "caratwopointo",
  storageBucket: "caratwopointo.appspot.com",
  messagingSenderId: "824234386957",
  appId: "1:824234386957:web:bb1ecd3f1bdf0804f95744"
};

const app = initializeApp(firebaseConfig);
const userAuth = getAuth(app);
export const firestore = getFirestore(app);

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);


  // const addDataToFirestore = async (jsonData) => {
  //   const menCollection = collection(firestore, "men");
  //    console.log("enterred");
  //   const addDocPromises = jsonData.map(async (data) => {
  //     try {
  //       console.log(data);
  //       await addDoc(menCollection, data);
  //       console.log("Document successfully written to Firestore!");
  //     } catch (error) {
  //       console.error("Error writing document to Firestore: ", error);
  //     }
  //   });

  //   try {
  //     await Promise.all(addDocPromises);
  //     console.log("All documents successfully written to Firestore!");
  //   } catch (error) {
  //     console.error("Error writing documents to Firestore: ", error);
  //   }
  // };
  useEffect(() => {
    onAuthStateChanged(userAuth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  // addDataToFirestore(jsonData)

  let isLoggedIn = user ? true : false;
  const signUp = (email, password) => {
    try {
      return createUserWithEmailAndPassword(userAuth, email, password);
    } catch (error) {
      console.log("error caught in sign up", error);
    }
  };

  const signin = (email, password) => {
    try {
      return signInWithEmailAndPassword(userAuth, email, password);
    } catch (error) {
      console.log("error caught in sign in", error);
    }
  };
  const getDocuments = async (c) => {
    try {
      const itemsRef = collection(firestore, 'men');
      const itemQuery = query(itemsRef,where("category","==",c), limit(10));
      return await getDocs(itemQuery);
    } catch (error) {
      console.log("Error while the the items", error);
    }
  }
  const getAllDocuments = async () => {
    try {
      const itemsRef = collection(firestore, 'men');
      return await getDocs(itemsRef);
    } catch (error) {
      console.log("Error while the the Allitems", error);
    }
  }

 const getDocument = async(id)=>{
  try {
    return await getDoc(doc(firestore,'men',id))
  } catch (error) {
    console.log("Error in getting a singlr document",error);
  }
 }
  return (
    <>
      <Firebase.Provider
        value={{ signUp, signin, isLoggedIn,getDocuments,getDocument,getAllDocuments}}
      >
        {props.children}
      </Firebase.Provider>
    </>
  );
};
