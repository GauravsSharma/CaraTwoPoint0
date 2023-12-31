import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";
import { useFirebase } from '../../firebase/FirebaseContext';
const ProductCard = ({ img, name, price1,price2, id, width = "1/5", isWish = false, setWish }) => {
   // console.log(id);
   const [color, setColor] = useState("slate");
   const {addToWishlist,addToCart} = useFirebase()
   const navigate = useNavigate();
   const addItemToCart = () => {
      // console.log("we called");
      const currCart = {
         img,
         name,
         DPrice:price1,
         OPrice:price2,
         id,
      }
      addToWishlist(currCart)
   }
   const toggleColor = () => {
      // console.log("entered");
      if (color !== "red") {
         addItemToCart();
      }
      setColor("red")
   }
   const handleRemove = () => {
      const data = localStorage.getItem('wishlist');
      // console.log('Existing data:', data);

      if (!data) {
         //   console.log('No data in wishlist');
         return;
      }

      const parsedData = JSON.parse(data);
      // console.log('Parsed data:', parsedData);
     
      const updatedData = parsedData.filter((item) => item.id !== id);
      setWish(updatedData)
      // console.log('Updated data:', id);

      localStorage.setItem('wishlist', JSON.stringify(updatedData));
      addToWishlist()
   };
   // console.log(price1,price2);
   const  discountPercentage = ((price2 - price1) / price2) * 100;

   // console.log(discountPercentage);

   const truncateText = (text, maxLength) => {
      // console.log("hell",text);
      const words = text.split(' ');
      const truncated = words.slice(0, maxLength).join(' ');

      return words.length > maxLength ? `${truncated}...` : truncated;
   };

   return (
      <>
         <div className={` w-1/2 h-auto sm:w-${width} p-0 sm:p-2 mt-2 hover:border-1 hover:border-slate-500 hover:shadow-2xl shadow-lg`} >
            <div className='w-full h-auto sm:h-[70%] relative object-contain hover:scale-105 duration-500'>
               <img className='w-full h-full group' src={img} alt="" />
               {
                  isWish ? null : <div className="top-4 right-4 absolute rounded-full h-[30px] w-[30px] flex justify-center items-center bg-white">
                     <IoMdHeart className={`text-xl cursor-pointer text-${color}-600`} onClick={toggleColor}/>
                  </div>
               }
            </div>
            <div className="text-black p-1 tracking-tighter sm:font-bold mt-2 sm:text-sm">{truncateText(name,3)}</div>
            <div className='flex justify-between p-1 items-center'>
               <p className="font-bold my-1">₹{price1}</p>
               <div className='flex justify-center items-center'>
               <s className='mr-1 text-slate-400'>₹{price2}</s>  
               <p className="font-bold my-1 text-green-600">({Math.round(discountPercentage)}% off)</p>
               </div>
            </div>
            {
               isWish ? <div className='w-full flex justify-between gap-1 items-center sm:flex-row flex-col '>
                  <button className=' sm:w-[48%] w-full text-xs p-1 border text-red-600 font-semibold  duration-500 border-red-600 hover:text-red-600' onClick={handleRemove}>Remove</button>
                  <button className='sm:w-[48%] w-full text-xs p-1 border hover:bg-slate-800 font-semibold duration-500 border-slate-800 hover:text-white' onClick={() => navigate(`/item-details/${id}`)}>View Details</button>
               </div> : <>
                  <button className='w-full p-1 border hover:bg-slate-800  duration-500 border-slate-800 hover:text-white' onClick={() => navigate(`/item-details/${id}`)}>View Details</button>
               </>
            }
            <Toaster />
         </div>
      </>
   );
};

export default ProductCard;
