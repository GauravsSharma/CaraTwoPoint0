import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const ProductCarousel = ({images,setProductCarouselShow,productCaraoselShow}) => {
  const [activeIndex, setActiveIndex] = useState(0);
// console.log(images);
  // const images = [
  //    "https://cdn-media.powerlook.in/catalog/product/1/-/1-dp-921921.jpg",
  //   "https://cdn-media.powerlook.in/catalog/product/6/-/6-dp-921921-.jpg",
  //   "https://cdn-media.powerlook.in/catalog/product/3/-/3-dp-921921.jpg",
  // ];

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='h-full sm:h-screen w-full fixed top-0 left-0 bg-black/75 z-50 flex justify-center items-center'>
      <div className="sm:w-[50%] w-full sm:h-full h-full sm:p-0 py-10 bg-zinc-800 flex justify-start items-start sm:relative">
      <div className='w-[20%] sm:block hidden h-full relative'>
        <div className='flex flex-col gap-2 h-1/2  justify-center items-center'>
        {
            images?.map((url,index)=>(
               <img src={url} alt="" key={index} className={`h-16  border-white border rounded-sm cursor-pointer w-12 object-cover `} onClick={()=>setActiveIndex(index)}/>
            ))
          }
        </div>
        </div>
        <div className='sm:w-[60%] w-full  h-full relative overflow-hidden'>
          {images?.map((src, index) => (
            <img
              key={index}
              src={src}
              className={`h-full object-cover w-full  absolute cursor-zoom-in`} style={{left:index*100+"%",transform:`translateX(-${activeIndex*100}%)`,transition:"1s"}}
              alt=""
            />
          ))}
          <div className='absolute bottom-5 w-full  sm:hidden flex justify-center items-center'>
             <div className='flex gap-3'>
             {
              images?.map((url,idx)=>(
                <div key={idx} className={`h-3 w-3 cursor-pointer ${activeIndex===idx?"bg-red-500":"bg-white"} rounded-full`} onClick={()=>setActiveIndex(idx)}></div>
              ))
             }
             
             </div>
          </div>
          <RxCross2 className='absolute top-2 right-2 text-2xl text-white cursor-pointer' onClick={()=>setProductCarouselShow(false)}/>
        </div>
       
        <div onClick={prevImage} className="absolute sm:block left-0  sm:-left-16 p-5 bg-white rounded-full text-slate-600 top-1/2 transform -translate-y-1/2 cursor-pointer"><FaArrowLeft/></div>
        <div onClick={nextImage} className="absolute sm:block right-0 sm:-right-16 p-5 bg-white rounded-full text-slate-600 top-1/2 transform -translate-y-1/2 cursor-pointer"><FaArrowRight/></div>
     
      </div>
    </div>
  );
};

export default ProductCarousel;
