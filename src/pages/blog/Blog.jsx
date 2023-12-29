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
    const blogImages = [
        "https://gauravssharma.github.io/Cara.in/blog/b1.jpg",
        "https://gauravssharma.github.io/Cara.in/blog/b2.jpg",
        "https://gauravssharma.github.io/Cara.in/blog/b4.jpg",
        "https://gauravssharma.github.io/Cara.in/blog/b6.jpg",
        "https://gauravssharma.github.io/Cara.in/blog/b7.jpg"
    ]
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
            <h1 className="text-center text-2xl sm:text-[2rem] font-semibold mt-5 sm:mt-8">Today's Blogs</h1>
            <p className='text-base mt-1 text-center text-slate-500'>Read our exicting blogs writed by our customers</p>
            <section id="blog" className="py-6 sm:px-10 sm:py-10 z-10 h-auto">
               {blogImages.map((image)=>(
                           <div className="blog-box mt-10 flex-col sm:flex-row flex justify-between items-center relative mb-5 sm:mb-16 min-h-48">
                           <div className="blog-img w-full sm:w-[40%] h-[40%] sm:h-full  sm:mr-10">
                               <img src={image} className='w-full h-full'/>
                           </div>
                           <div className="blog-des w-full sm:w-[60%] p-5">
                               <h4 className="sm:text-3xl text-2xl my-2 sm:mb-3">The Cotton Jersey Zip Up Hoodies</h4>
                               <p className="text-base">
                                   Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Atque, ad. Veritatis,
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
               )) }
              
            </section>

        </div>
            </>
         }
       </>
    )
}
export default Blog


