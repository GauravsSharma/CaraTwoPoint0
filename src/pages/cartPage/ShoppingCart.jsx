import React, { useState,useEffect } from 'react'
import Image from '../../../public/emptyCart.jpg'
import toast ,{Toaster} from 'react-hot-toast';
import { useFirebase } from '../../firebase/FirebaseContext';
const ShoppingCart = (
 { name,
  DPrice,
  OPrice,
  size,
  color,
  image,
  id,
setCart,
isCheckoutShow=false,
quan,
handleQuantityChange,
idx,
setISCheckoutShow,
isOrder=false,
date,
paymentId,
}
) => {
  const [quantity,setQuantity] = useState(quan);
  const {addToWishlist,addToCart} = useFirebase()
  const  discountPercentage = ((OPrice - DPrice) / OPrice) * 100;
  const handlePlus = () => {
    if (quantity >= 1 && quantity < 10) {
      setQuantity(prev => prev + 1);
      // console.log(handleQuantityChange);
      handleQuantityChange(idx,quantity+1)
    }
  }
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      console.log("quaann",quantity);
      handleQuantityChange(idx,quantity-1);
    }
  }
  const handleMoveToWishList =()=>{
    const wishObj = {
      img:image,
      name,
      DPrice,
      OPrice,
      id,
    }
      const check = addToWishlist(wishObj);
      if(check){
        const getcarts = localStorage.getItem("cart")
        const updatedCart = JSON.parse(getcarts).filter((item)=>{
         return item.id!==id
        })
        localStorage.setItem("cart",JSON.stringify(updatedCart))
        setCart(updatedCart)
        addToCart();
      }
      // get the item form cart and remove it 
    
  }
  const handleRemoveFromCart = () => {
    // console.log("id is",id);
    const items = localStorage.getItem("cart");
    const parsedItems = JSON.parse(items);
  
    // Filter out the item with the specified id
    const updatedItems = parsedItems.filter((item) => item.id !== id);
  
    console.log("parsed..",parsedItems);
  
    // Update local storage with the new array of items
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems);
    toast.success("Item removed");
    addToCart()
    // Update state if you are using state to manage the cart in your component
  };
 
  return (
    <div className='w-full flex justify-start items-start sm:items-center h-auto sm:h-40 p-1 border rounded-sm my-3'>
      <img className='h-full w-[20%] border rounded-sm object-cover' src={image} alt="" />
      <div className='h-full w-[80%] sm:p-2'>
        <div className="upper w-full flex p-1 sm:p-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
          <div className="left w-full sm:w-[80%] flex flex-col items-start pl-1">
            <h2 className='text-sm'>{name}</h2>
            <h3 className='text-sm'>Color <div style={{backgroundColor:`${color}`}} className={`inline-block boder rounded-sm h-3 w-3 mx-1 mt-[4px]`}></div> Size · {size} · SKU 04-955630-{size}</h3>
           {!isOrder?<div className='flex justify-start gap-1 items-center w-full mt-2'>
              <p className='text-[15px] font-semibold'>QTY</p>
              <span className='py-0 px-2 text-lg border mr-1  font-semibold cursor-pointer' onClick={handlePlus}>+</span>
              <span className='text-lg mr-1 font-semibold'>{quantity}</span>
              <span className='py-0 px-2 text-lg border mr-2 font-semibold cursor-pointer' onClick={handleMinus}>-</span>
            </div>:<div>
               <p className='mt-1 text-[15px]'><span className="font-semibold text-500">Quantity: </span> {quan}</p>
               <p className='mt-1 text-[15px]'><span className="font-semibold text-500">Order Date: </span> {date}</p>
               <p className='mt-1 text-[15px]'><span className="font-semibold text-500">Payment ID :</span> {paymentId}</p>
               
              </div>}
          </div>
          <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-0 sm:flex-col sm:w-[20%]">
            <h1 className='font-semibold text-sm sm:text-xl my-1 sm:my-0'>₹{DPrice}.00</h1>
            <h3 className='inilne-block text-sm sm:text-md font-semibold text-green-600'>({Math.floor(discountPercentage)}% off)</h3>
          </div>
        </div>
       { !isOrder&&<div className="lower h-[20%] w-full ">
          <div className='flex h-full w-full justify-start items-center p-1 sm:p-3 sm:py-4'>
          {  !isCheckoutShow&&<div className="remove text-slate-400 text-sm pr-7 font-semibold cursor-pointer border-r-2" onClick={()=>handleRemoveFromCart()}>REMOVE</div>}
           {!isCheckoutShow&& <div className="move text-red-500 text-sm pl-7  font-semibold cursor-pointer" onClick={handleMoveToWishList}>MOVE TO WISHLIST</div>}
          </div>
        </div>}
      </div>
      <Toaster/>
    </div>
  )
}

export default ShoppingCart