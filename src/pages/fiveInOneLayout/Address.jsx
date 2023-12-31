import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import AdForm from './AdForm';
const Address = () => {
  const [loading,setLoading] = useState(true);
    const [isAddShow,setIsAddShow] = useState(false);
    const [userAddress,setUserAddress] = useState(null);
    const getAddress=()=>{
      const data = localStorage.getItem("userAddress");
      if(data){
       const parseData = JSON.parse(data);
       setUserAddress(parseData);
      } 
      else{
       setUserAddress(null);
      }
      setTimeout(() => {
       setLoading(false);
     }, 3000);
    }
    useEffect(()=>{
      getAddress();
    },[])

  return (
   <>
      {
        loading?<>
             <div className='p-5 sm:p-20 w-full '>
              <div className='h-7 w-40 bg-slate-200 rounded-lg animate-pulse'></div>
              <div className='w-full  mt-10 '>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start mt-7'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start mt-7'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
              </div>
              <div className='h-12 w-32 mt-14 bg-slate-200 rounded-lg animate-pulse'></div>
          </div>
        </>:<>
           <div className='sm:py-14 sm:px-14 py-10 px-5 h-auto w-full'>
       <div className='flex justify-between items-center w-full'>
       <h1 className='font-semibold text-2xl'>Address</h1>
        <div className='flex text-red-500 justify-center items-center text-xl cursor-pointer' onClick={(()=>setIsAddShow(true))}>
            <FaPlusCircle className='mr-2'/>
            <p className=''>Add new address</p>
        </div>
       </div>
      <AdForm isAddShow={isAddShow} setIsAddShow={setIsAddShow}
       address={userAddress?.address} 
       landmark={userAddress?.landmark} 
       zipCode={userAddress?.zipCode} 
       country={userAddress?.country} 
       state={userAddress?.state} 
       name={userAddress?.name} 
       phoneNumber={userAddress?.phoneNumber} 
       getUserAddress={getAddress}
      />
        <div className='flex flex-col sm:flex-row gap-5  mt-10 w-full justify-between items-center'>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-base sm:text-xs text-slate-400 font-semibold'>Your Address</p>
              {
                userAddress?(
                    <h1 className='text-semibold text-xl'>{userAddress?.address}</h1>
                ):(
                    <h1 className='text-semibold text-xl'>Nothing provided</h1>
                )
              }
            </div>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-base sm:text-xs text-slate-400 font-semibold'>Your Country</p>
              {
                userAddress?(
                    <h1 className='text-semibold text-xl'>{userAddress?.country}</h1>
                ):(
                    <h1 className='text-semibold text-xl'>Nothing provided</h1>
                )
              }
            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 mt-10 w-full justify-between items-center'>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-base sm:text-xs text-slate-400 font-semibold'>Your Landmark</p>
              {
                userAddress?(
                    <h1 className='text-semibold text-xl'>{userAddress?.landmark}</h1>
                ):(
                    <h1 className='text-semibold text-xl'>Nothing provided</h1>
                )
              }
            </div>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-base sm:text-xs text-slate-400 font-semibold'>Your Postal Code</p>
              {
                userAddress?(
                    <h1 className='text-semibold text-xl'>{userAddress?.zipCode}</h1>
                ):(
                    <h1 className='text-semibold text-xl'>Nothing provided</h1>
                )
              }
            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 mt-10 w-full justify-between items-center'>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-base sm:text-xs text-slate-400 font-semibold'>Your State</p>
              {
                userAddress?(
                    <h1 className='text-semibold text-xl'>{userAddress?.state}</h1>
                ):(
                    <h1 className='text-semibold text-xl'>Nothing provided</h1>
                )
              }
            </div>
        </div>
    </div>
        </>
      } 
   </>
  )
}

export default Address