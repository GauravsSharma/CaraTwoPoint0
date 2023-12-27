import React, { useEffect, useState } from 'react'
import Card from '../../components/cardSection/Card'
const WishList = () => {
  const [loading,setLoading] = useState(true);
  const [wishlist,setWish] = useState();

  useEffect(()=>{
    // localStorage.removeItem("wishlist")
    const data = localStorage.getItem('wishlist')
    setWish(()=>{
      return data?JSON.parse(data):[];
    })
    setTimeout(() => {
     setLoading(false);
   }, 3000);

 },[])
  return (
    <>
      {
        loading ? <div className='h-screen sm:h-[20rem] w-full sm:w-[90vw] px-2 py-8 sm:px-10 sm:pt-10 flex justify-start sm:gap-2 flex-wrap sm:flex-nowrap'> 
        <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
              {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
           <div className='w-full h-[80%] sm:h-[80%] relative'>
           <div className='w-full h-full group bg-slate-200 animate-pulse'/>
           </div>
           <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
           <div className='flex justify-between p-1 items-center'>
            <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
            <div className='flex'>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            </div>
           </div>
           <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
        </div>
        <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
              {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
           <div className='w-full h-[80%] sm:h-[80%] relative'>
           <div className='w-full h-full group bg-slate-200 animate-pulse rounded-lg'/>
           </div>
           <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
           <div className='flex justify-between p-1 items-center'>
            <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
            <div className='flex'>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            </div>
           </div>
           <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
        </div>
        <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
              {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
           <div className='w-full h-[80%] sm:h-[80%] relative'>
           <div className='w-full h-full group bg-slate-200 animate-pulse'/>
           </div>
           <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
           <div className='flex justify-between p-1 items-center'>
            <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
            <div className='flex'>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            </div>
           </div>
           <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
        </div>
        <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
              {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
           <div className='w-full h-[80%] sm:h-[80%] relative'>
           <div className='w-full h-full group bg-slate-200 animate-pulse'/>
           </div>
           <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
           <div className='flex justify-between p-1 items-center'>
            <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
            <div className='flex'>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
            </div>
           </div>
           <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
        </div>
           
        </div>:<>
          <div className='py-10 px-5 sm:px-10 sm:py-14 w-full sm:w-[85%]'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Your WishList</h1>
            <div className='flex flex-wrap'>
               {
                wishlist.length>0?<>
                 {
                   wishlist?.map((item)=>(
                      <Card img={item.img} id={item.id} price1 ={item.DPrice} price2={item.OPrice} name={item.name} isWish={true} setWish={setWish}/>
                    ))
                 }
                </>:<></>
               }
            </div>
          </div>
        </>
      }
    </>
  )
}

export default WishList