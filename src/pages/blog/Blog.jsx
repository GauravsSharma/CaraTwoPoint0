import React, { useEffect, useState } from 'react'

const Blog = ({setNav,setFoot}) => {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
       setTimeout(() => {
        setLoading(false)
       }, 3000);
        setFoot(true)
        setNav(true);
    })
    return (
       <>
         {
            loading?<>
                <div className='h-auto flex flex-col justify-center items-center p-5 sm:py-10 sm:px-20 gap-5'>
                   <div className='flex h-80 w-full flex-col sm:flex-row'>
                       <div className=' w-[40%] rounded-lg bg-slate-200 animate-pulse'></div>
                       <div className='w-[60%] flex justify-center gap-4 p-10 items-center flex-col'>
                           <div className='w-52 h-5 bg-slate-200 animate-pulse mb-7 rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                       </div>
                   </div>
                   <div className='flex h-80 w-full flex-col sm:flex-row'>
                       <div className='w-[40%] rounded-lg bg-slate-200 animate-pulse'></div>
                       <div className='w-[60%] flex justify-center gap-4 p-10 items-center flex-col'>
                           <div className='w-52 h-5 bg-slate-200 animate-pulse mb-7 rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                           <div className='w-full h-2 bg-slate-200 animate-pulse rounded-lg'></div>
                       </div>
                   </div>
                </div>
            </>:<>
            <div className='h-auto'>
            <h1 className="text-center text-2xl sm:text-[2rem] font-semibold mt-5 sm:mt-8">#Today's Blogs</h1>
            <section id="blog" className="py-10 px-5 sm:px-10 sm:py-10 z-10 h-auto">
                <div className="blog-box mt-10 flex-col sm:flex-row flex justify-between items-center relative mb-5 sm:mb-16 min-h-48">
                    <div className="blog-img w-full sm:w-[40%] h-full  sm:mr-10">
                        <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="blog-des w-full sm:w-[60%]">
                        <h4 className="sm:text-3xl text-2xl my-2 sm:mb-3">The Cotton Jersey Zip Up Hoodies</h4>
                        <p className="text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ad. Veritatis,
                            tenetur. Animi exercitationem possimus dolores. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quae nulla ducimus reiciendis fugit officiis modi!
                        </p>
                        <a href="#" className="text-slate-700 text-xs mt-5 font-semibold relative transition duration-500 hover:text-slate-900">
                            CONTINUE READING
                            <span className="after-hover"></span>
                        </a>
                    </div>
                    <h1 className="absolute top-[-35px] left-0 text-gray-300 text-6xl font-bold -z-10">13/01</h1>
                </div>
                <div className="blog-box mt-10 flex-col sm:flex-row flex justify-between items-center relative mb-5 sm:mb-16">
                    <div className="blog-img w-full sm:w-[40%] h-full  sm:mr-10">
                        <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="blog-des w-full sm:w-[60%]">
                        <h4 className="sm:text-3xl text-2xl my-2 sm:mb-3">The Cotton Jersey Zip Up Hoodies</h4>
                        <p className="text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, ad. Veritatis,
                            tenetur. Animi exercitationem possimus dolores. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quae nulla ducimus reiciendis fugit officiis modi!
                        </p>
                        <a href="#" className="text-slate-700 text-xs mt-5 font-semibold relative transition duration-500 hover:text-slate-900">
                            CONTINUE READING
                            <span className="after-hover"></span>
                        </a>
                    </div>
                    <h1 className="absolute top-[-35px] left-0 text-gray-300 text-6xl font-bold -z-10">13/01</h1>
                </div>
            </section>

        </div>
            </>
         }
       </>
    )
}
export default Blog


