import React, { useState } from 'react'
import { IoStar } from "react-icons/io5";
import CustomerReviewCard from './CustomerReviewCard';
import { IoMdArrowDropdown } from "react-icons/io";
import { PiCaretUpDuotone } from "react-icons/pi";
import GetReviewsModel from './GetReviewsModel';
const ProductReview = () => {
  const [showAllReview,setShowAllReview] = useState(false);
  const[isOpen,setIsOpen] = useState(false);
  const toggleModel = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className='h-auto  p-5 sm:p-10 flex flex-col sm:flex-row gap-4 mt-10'>
      <div className="box1 w-full sm:w-[30%]">
        <h1 className='text-3xl font-semibold mb-5 sm:mb-1'>Rate & Review</h1>
        <div className='flex justify-start items-center mt-3'><IoStar className='text-xl text-green-600' /> <span className='font-semibold text-xl mx-2'>4.8</span><span className='text-slate-400 ml-4'>8 varified customers review this.</span></div>
        <div className="flex justify-start items-center text-slate-400 text-xl my-5">5 <IoStar className='text-slate-400 text-base mx-3' /> <div className='h-[10px] w-[60%] mr-2 bg-slate-200'>
          <div className='h-full w-[80%] bg-green-500'></div>
        </div>
          <div className='text-slate-900'>6</div>
        </div>
        <div className="flex justify-start items-center text-slate-400 text-xl my-5">4 <IoStar className='text-slate-400 text-base mx-3' /> <div className='h-[10px] w-[60%] mr-2 bg-slate-200'>
          <div className='h-full w-[60%] bg-green-500'></div>
        </div>
          <div className='text-slate-900'>2</div>
        </div>
        <div className="flex justify-start items-center text-slate-400 text-xl my-5">3 <IoStar className='text-slate-400 text-base mx-3' /> <div className='h-[10px] w-[60%] mr-2 bg-slate-200'>
          <div className='h-full w-0 bg-green-500'></div>
        </div>
          <div className='text-slate-900'>0</div>
        </div>
        <div className="flex justify-start items-center text-slate-400 text-xl my-5">2 <IoStar className='text-slate-400 text-base mx-3' /> <div className='h-[10px] w-[60%] mr-2 bg-slate-200'>
          <div className='h-full w-0 bg-green-500'></div>
        </div>
          <div className='text-slate-900'>0</div>
        </div>
        <div className="flex justify-start items-center text-slate-400 text-xl my-5">1 <IoStar className='text-slate-400 text-base mx-3' /> <div className='h-[10px] w-[60%] mr-2 bg-slate-200'>
          <div className='h-full w-0 bg-green-500'></div>
        </div>
          <div className='text-slate-900'>0</div>
        </div>
        

      </div>
      <div className="box2 w-full sm:w-[50%]">
        <h1 className='text-3xl font-semibold mb-5 sm:mb-10'>Customer Reviews</h1>
       <div className='flex flex-col gap-5 duration-500'>
        <CustomerReviewCard/>
        <CustomerReviewCard/>
        {
          showAllReview?<>
           <CustomerReviewCard/>
           <CustomerReviewCard/>
          </>:null
        }
        <button onClick={()=>setShowAllReview(!showAllReview)} className='duration-500 text-red-600 text-start'>{
          showAllReview?<>Hide all 14 review <PiCaretUpDuotone className='inline-block text-xl'/></>:<>Show all 14 review <IoMdArrowDropdown className='inline-block text-xl'/></>
        }</button>
       </div>
      </div>
      <div className="box3  w-full sm:w-[20%]">
        <div className='cursor-pointer py-4 text-white px-2 bg-red-600 rounded-md w-full sm:w-[70%] text-xs font-bold hover:shadow-xl hover:shadow-red-100 duration-500 text-center' onClick={toggleModel}>WRITE A PRODUCT REVIEW</div>
      </div>
      <GetReviewsModel isOpen={isOpen} toggleModel={toggleModel}/>
    </div>
  )
}

export default ProductReview