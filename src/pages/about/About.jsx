import React, { useEffect, useState } from 'react'

const About = ({setNav,setFoot}) => {
  const [loading ,setLoading] = useState(true);
  useEffect(()=>{
    setFoot(true)
    setNav(true)
   setTimeout(() => {
    setLoading(false)
   }, 3000);
  })
  return (
  <>
     {
      loading?<div className=' p-5 sm:p-10'>
         <div className='flex flex-col sm:flex-row w-full h-[70vh] '>
          <div className="bg-slate-200 h-full w-full sm:w-1/2 rounded-lg animate-pulse"></div>
          <div className='w-full sm:w-1/2 flex justify-center items-start my-4 sm:my-0 sm:p-10 flex-col gap-5'>
           <div className='w-[60%] h-9 bg-slate-200 rounded-lg animate-pulse'></div>
           <div className='w-full'>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
           </div>

          </div>
         </div>
      </div>:<>
      <section id="about-head" className="flex    flex-col sm:flex-row items-center p-5 sm:p-10">
      <img src="https://gauravssharma.github.io/Cara.in/about/a6.jpg" className='w-full sm:w-1/2 h-auto' alt=""/>
      <div className='sm:pl-[50px] w-full sm:w-1/2 py-5'>
       <h2 className='font-bold text-[2rem] sm:text-[3rem]'>Who We Are ?</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi corrupti dignissimos dicta exercitationem corporis recusandae cum deserunt quisquam quis. Cum praesentium inventore eveniet, cumque atque quis in. Sed inventore iure amet rem aperiam aspernatur delectus beatae? Laboriosam at ea Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eius!</p>
       <br/>
       <abbr title="" className='my-4 font-semibold'>Creating stunning images with as much o as little control as you like thanks to a choice of Basic and Creative mode</abbr>
       <br/><br/>
       <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Creating stunning images with as much o as little control as you like thanks to a choice of Basic and Creative mode</marquee>
      </div>
   </section>
   <section id="about-app" className="p-5 sm:p-10  text-center ">
     <h1 className='text-[2rem] font-bold sm:text-[3rem]'>Download Our <a href="" className='text-blue-800 decoration-slate-800'>App</a></h1>
     <div className="video w-full sm:w-[70%] h-full mt-[30px] mx-auto">
     <video autoPlay muted loop src="https://gauravssharma.github.io/Cara.in/about/1.mp4" className='w-full h-full rounded-2xl'></video>

     </div>
    </section>
   </>
     }
  </>
  )
}

export default About