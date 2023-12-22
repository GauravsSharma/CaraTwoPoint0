import React from 'react'
import Card from './Card';

const CardSection = ({data}) => {
  // console.log(data);
  return (
    <div className=' h-auto p-0 sm:p-10'>
        <h1 className='text-center text-3xl mb-2'>Checkout popular shirts</h1>
        <p  className='sm:text-base text-sm text-slate-400 text-center mb-7'>Upgrade your wardrobe with our must-have shirts</p>

        <div className="cardSection h-auto py-1 my-4 flex sm:justify-start flex-wrap items-center">
          {
            data?.map((item)=>(
              <Card key={item?.id} id={item?.id} img ={item.data()?.image[0]} name ={item.data()?.name} price1={item.data()?.DPrice} price2={item.data()?.OPrice}/>
            ))
          }
        </div> 
        <div className='flex justify-center items-center mt-5'>
        <button className='py-[6px] px-12 border-2 text-base font-bold border-red-800 hover:bg-red-800 hover:text-white duration-500 mt-5'>VIEW ALL PRODUCT</button>
        </div>
    </div>
  )
}

export default CardSection