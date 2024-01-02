import React from 'react'
import { IoStar } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
const CustomerReviewCard = ({reviewTitle,reviewDescription,rating,date,userName="user"}) => {
  // console.log(reviewDiscription);
  return (
    <div className="card w-full h-auto pb-3 border-b-2">
    <div className='flex items-center'>
       <div className="flex justify-center text-white items-center py-0 rounded-[4px] px-1 p bg-green-600">
             <p className='font-semibold mt-[2px]'>{rating}</p>
            <IoStar className='ml-1 text-xs' />
       </div>
       <p className='font-semibold sm:ml-5 ml-2'>{reviewTitle}</p>
    </div>
    <p className='text-base font-medium sm:mt-5 mt-3 text-slate-600'>{reviewDescription}</p>
    <div className="flex justify-start items-center  my-4">
      
    </div>
    <div className='flex justify-start items-center'>
      <span className='text-xs text-slate-500 mr-4'>{userName}</span>
      <span className='text-xs hidden sm:block text-slate-400 mr-4'> <MdVerified  className='inline-block text-base'/>Certified Buyer, Howrah</span>
      <span className='text-xs text-slate-400 mr-4'>{date}</span>
    </div>
 </div>
  )
}

export default CustomerReviewCard