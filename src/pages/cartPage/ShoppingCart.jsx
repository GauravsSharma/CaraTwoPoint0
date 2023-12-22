import React, { useState } from 'react'

const ShoppingCart = (
  name,
  price,
  qty,
  size,
  color,
  image,
  id
) => {
  const [quan, setQuan] = useState(1);
  const handlePlus = () => {
    if (quan >= 1 && quan < 20) {
      setQuan(prev => prev + 1);
    }
  }
  const handleMinus = () => {
    if (quan > 1) {
      setQuan(prev => prev - 1);
    }
  }
  const handleMoveToWishList =()=>{
    const wishItems = localStorage.getItem("wishlist")
    const wishItemsIntoJSON = JSON.parse(wishItems)
    const wishObj = {
      name,
      price,
      qty,
      size,
      color,
      image,
      id
    }
   const newData = wishItemsIntoJSON && [...wishItemsIntoJSON,wishObj];
   localStorage.setItem("wishlist",JSON.stringify(newData))
   const cart = localStorage.getItem("carts")
   const cartIntoJSON = JSON.parse(cart);
   const newCart = cartIntoJSON?.filter((item)=>{
    return item.id!=id
   })
   localStorage.setItem('carts',JSON.stringify(newCart));
  }
  return (
    <div className='w-full flex justify-start items-start sm:items-center h-auto sm:h-40 p-1 border rounded-sm my-3'>
      <img className='h-full w-[20%] border rounded-sm object-cover' src="https://cdn-media.powerlook.in/catalog/product/d/p/dp_1068-2_01-961010.jpg" alt="" />
      <div className='h-full w-[80%] sm:p-2'>
        <div className="upper w-full flex p-1 sm:p-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
          <div className="left w-full sm:w-[80%] flex flex-col items-start pl-1">
            <h2 className='text-sm'>Grey and Black Rebel Oversized Varsity Jacket</h2>
            <h3 className='text-sm'>Color <div className={`inline-block rounded-sm bg-slate-300 h-4 w-4 mx-1 mt-[3px]`}></div> Size M · Sleeves Full Sleeves · SKU 04-955630-M</h3>
            <div className='flex justify-start gap-1 items-center w-full mt-2'>
              <p className='text-[15px] font-semibold'>QTY</p>
              <span className='py-0 px-2 text-lg border mr-1  font-semibold cursor-pointer' onClick={handlePlus}>+</span>
              <span className='text-lg mr-1 font-semibold'>{quan}</span>
              <span className='py-0 px-2 text-lg border mr-2 font-semibold cursor-pointer' onClick={handleMinus}>-</span>
            </div>
          </div>
          <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-0 sm:flex-col sm:w-[20%]">
            <h1 className='font-semibold text-sm sm:text-xl my-1 sm:my-0'>₹{"930.00"}</h1>
            <h3 className='inilne-block text-sm sm:text-md font-semibold text-green-600'>{"(50%OFF)"}</h3>
          </div>
        </div>
        <div className="lower h-[20%] w-full ">
          <div className='flex h-full w-full justify-start items-center p-1 sm:p-3 sm:py-4'>
            <div className="remove text-slate-400 text-sm pr-7 font-semibold cursor-pointer border-r-2">REMOVE</div>
            <div className="move text-red-500 text-sm pl-7  font-semibold cursor-pointer" onClick={handleMoveToWishList}>MOVE TO WISHLIST</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart