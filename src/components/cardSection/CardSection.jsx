import React from 'react'
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardSection = ({data,heading,subHead}) => {
  const navigate =useNavigate();
  // console.log(data);
  return (
    <div className=' h-auto p-0 sm:p-10 my-5'>
        <h1 className='text-center text-2xl sm:text-3xl sm:mb-2 '>{heading}</h1>
        <p  className='sm:text-base text-sm text-slate-400 text-center mb-1 sm:mb-7'>{subHead}</p>

        <div className="cardSection h-auto py-1 my-1 flex sm:justify-start flex-wrap items-center">
          {
            data?.map((item)=>(
              <Card key={item?.id} id={item?.id} img ={item.data()?.image[0]} name ={item.data()?.name} price1={item.data()?.DPrice} price2={item.data()?.OPrice}/>
            ))
          }
        </div> 
        <div className='flex justify-center items-center mt-5'>
        <button className='py-[6px] px-12 text-base font-bold bg-slate-800 text-white hover:shadow-lg  hover:bg-slate-900 duration-500 mt-5
        ' onClick={()=>navigate(`/shopping/${data[0].data().category}`)}>VIEW ALL PRODUCT</button>
        </div>
    </div>
  )
}

export default CardSection