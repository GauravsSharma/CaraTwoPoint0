// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getBytes, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import toast,{Toaster} from 'react-hot-toast'
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
// import { getDatabase, ref, set } from "firebase/  
// Import the necessary functions for Realtime Database

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
const storage = getStorage();
export const ContextProvider = (props) => {
const [user, setUser] = useState(null);
const currentDate = new Date().toLocaleDateString();
// console.log(currentDateOnly);
const currentTime = new Date().toLocaleTimeString();
// console.log(currentTimeOnly);
const googleProvider = new GoogleAuthProvider();

 
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
  console.log(isLoggedIn);
  const signInWithGoogle = async() => await signInWithPopup(userAuth, googleProvider)
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
  const getOrders = async () => {
    try {
      const itemsRef = collection(firestore, 'orders');
      const itemQuery = query(itemsRef,where("userId","==",user?.uid), limit(10));
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
 const getReviewDocument = async(productId)=>{
  try {
    const itemsRef = collection(firestore,'men',productId,"user-reviews");
      return await getDocs(itemsRef);
  } catch (error) {
    console.log("Error in getting a single document",error);
  }
 }
 const addReviewForProduct = async (userName,productId, rating, reviewDescription, reviewTitle,imagesForDb) => {
  try {
    // Upload images to storage
    const imageUrls = imagesForDb
    ? await Promise.all(imagesForDb.map(async (image) => {
        const imageRef = ref(storage, `uploads/items/${Date.now()}-${image.name}`);
        const upload = await uploadBytes(imageRef, image);
        return upload.ref.fullPath;
      }))
    : [];

    // Add review to Firestore
    // const user = /* Get the user object or UID */;
  console.log(productId);
    const collectionRef = collection(firestore, 'men', productId,"user-reviews");

    const reviewData = {
      reviewTitle: reviewTitle,
      reviewDescription: reviewDescription,
      rating: rating,
      images: imageUrls,
      currentDate,
      currentTime,
      userName
    };

    await addDoc(collectionRef, reviewData);
  } catch (error) {
    console.error(error);
  }
};

const addOrder = async(order)=>{
  try {
    const ref = collection(firestore,"orders");
    setLengthOfCart(0);
    return await addDoc(ref,{...order,userId:user?.uid})
  } catch (error) {
     console.log("error in adding order",error);
  }
}
const [lengthOfWishlist,setLengthOfWishlist] = useState(()=>{
  const data = localStorage.getItem("wishlist")
  return data?JSON.parse(data).length:0
});
const [lengthOfCart,setLengthOfCart] = useState(()=>{
  const data = localStorage.getItem("cart")
  return data?JSON.parse(data).length:0
});
const addToWishlist=(obj)=>{
  const data = localStorage.getItem('wishlist')
  const prev = data ? JSON.parse(data) : [];
  const checkIfAlreadyExist = prev.some(item => item.id === obj.id)
  
  console.log(checkIfAlreadyExist);
  if(checkIfAlreadyExist){
    toast.error("Product already exist in wishlist")
    return false;
  }
 if(obj){
  const updatedCart = [...prev, obj];
  setLengthOfWishlist(updatedCart.length);
  localStorage.setItem('wishlist', JSON.stringify(updatedCart));
  toast.success("Item added to you wishlist")
  return true;
 }
 else{
   setLengthOfWishlist(prev.length);
 }
}
const addToCart=(obj)=>{
  const data = localStorage.getItem('cart')
  const prev = data ? JSON.parse(data) : [];
 
  if(obj){
    const checkIfAlreadyExist = prev.some(item => item.id === obj.id)             
    console.log(checkIfAlreadyExist);
    if(checkIfAlreadyExist){
      console.log("i entered");
      toast.error("Product already exist in your cart")
      return;
    }  
  const updatedCart = [...prev, obj];
  setLengthOfCart(updatedCart.length);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  toast.success("Item added to you cart")
  return updatedCart;
  }
  else{
    setLengthOfCart(prev.length)
  }
}
const signout = async () => {
  return await signOut(userAuth);
}
  return (
    <>
      <Firebase.Provider
        value={{ signUp, signin, user,isLoggedIn,getDocuments,getDocument,getAllDocuments,addReviewForProduct,getReviewDocument,addOrder,signInWithGoogle,addToWishlist,lengthOfWishlist,lengthOfCart,addToCart,signout,getOrders}}
      >
        {props.children}
        <Toaster/>
      </Firebase.Provider>
    </>
  );
};
