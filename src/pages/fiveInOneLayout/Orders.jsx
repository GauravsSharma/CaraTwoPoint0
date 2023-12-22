import React, { useEffect, useState } from 'react'
import ShoppingCart from '../cartPage/ShoppingCart'
const Orders = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])
  if (loading) {
    return <>
      <div className='p-5 sm:p-10 w-full'>
        <div className='w-32 h-5 my-10 bg-slate-200 animate-pulse rounded-lg'></div>
        <div className='sm:h-36 w-full flex'>
          <div className='w-[20%] h-20 sm:h-full  bg-slate-200 animate-pulse'></div>
          <div className='h-full w-[80%] '>
            <div className="upper w-full flex px-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
              <div className="left w-full sm:w-[80%] flex flex-col items-start pl-1">
                <h2 className='text-sm h-5 w-48 bg-slate-200 animate-pulse rounded-lg'></h2>
                <h3 className='text-sm h-5 w-56 bg-slate-200 animate-pulse rounded-lg my-3'></h3>
                <div className='flex justify-start gap-1 items-center mt-2 h-5 w-40 bg-slate-200 animate-pulse rounded-lg'>
                </div>
              </div>
              <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-2 sm:flex-col sm:w-[20%]">
                <h1 className='font-semibold text-sm sm:text-xl my-2 sm:my-0 h-5 w-20 bg-slate-200 animate-pulse rounded-lg'></h1>
                <h3 className='inilne-block text-sm sm:text-md font-semibold h-5 w-20 bg-slate-200 animate-pulse rounded-lg '></h3>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:h-36 w-full my-10 sm:my-5 flex'>
          <div className='w-[20%] h-20 sm:h-full  bg-slate-200 animate-pulse'></div>
          <div className='h-full w-[80%] '>
            <div className="upper w-full flex px-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
              <div className="left w-full sm:w-[80%] flex flex-col items-start pl-1">
                <h2 className='text-sm h-5 w-48 bg-slate-200 animate-pulse rounded-lg'></h2>
                <h3 className='text-sm h-5 w-56 bg-slate-200 animate-pulse rounded-lg my-3'></h3>
                <div className='flex justify-start gap-1 items-center mt-2 h-5 w-40 bg-slate-200 animate-pulse rounded-lg'>
                </div>
              </div>
              <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-2 sm:flex-col sm:w-[20%]">
                <h1 className='font-semibold text-sm sm:text-xl my-2 sm:my-0 h-5 w-20 bg-slate-200 animate-pulse rounded-lg'></h1>
                <h3 className='inilne-block text-sm sm:text-md font-semibold h-5 w-20 bg-slate-200 animate-pulse rounded-lg '></h3>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  }
  return (
    <>
      <div className='w-full sm:w-[85%] py-10 px-5 sm:py-14 sm:px-10'>
        <h1 className='text-2xl font-semibold'>Your Orders</h1>
        <ShoppingCart />
        <ShoppingCart />
      </div>
    </>
  )
}

export default Orders