import React from 'react'
import { IoStar } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
const CustomerReviewCard = () => {
  return (
    <div className="card w-full h-auto pb-3 border-b-2">
    <div className='flex items-center'>
       <div className="flex justify-center text-white items-center py-0 rounded-[4px] px-1 p bg-green-600">
             <p className='font-semibold mt-[2px]'>5</p>
            <IoStar className='ml-1 text-xs' />
       </div>
       <p className='font-semibold ml-5'>Worth every penny</p>
    </div>
    <p className='text-base font-medium mt-5'>I think the best bujte smartphone under this price segment !!!</p>
    <div className="flex justify-start items-center  my-4">
     <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/9/6/-original-imagwfffndz6tfhk.jpeg?q=70" alt="" className='h-14 w-12 mr-3 object-cover' />
     <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/9/6/-original-imagwfffndz6tfhk.jpeg?q=70" alt="" className='h-14 w-12 mr-3 object-cover' />
    </div>
    <div className='flex justify-start items-center'>
      <span className='text-xs text-slate-500 mr-4'>Tuhin mukherjee</span>
      <span className='text-xs text-slate-400 mr-4'> <MdVerified  className='inline-block text-base'/>Certified Buyer, Howrah</span>
      <span className='text-xs text-slate-400 mr-4'>4 days ago</span>
    </div>
 </div>
  )
}

export default CustomerReviewCard