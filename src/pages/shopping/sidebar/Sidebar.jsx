import React, { useEffect, useState } from 'react'
import Input from './input/Input';
import FilterByPrice from './filtercomponents/FilterByPrice';
import FilterBySleeves from './filtercomponents/FilterBySleeves';
import FilterByColr from './filtercomponents/FilterByColor';
import FilterByColor from './filtercomponents/FilterByColor';

const Sidebar = ({setPrice, setColor, setIsSleeves, setIsSort,colors,isFilterShow,setIsfilterShow}) => {

    const [resetValue,setResetValue] = useState(null);
    const handleReset = ()=>{
      setPrice(null)
      setColor(null)
      setIsSleeves(null);
      setResetValue(Date.now());
    }
  return (
    <div className={`filter ${isFilterShow} min-h-screen bg-white z-50 fixed top-0 sm:relative sm:z-0 md:block w-full duration-1000 sm:w-1/5 border border-1`}>
    <div className='py-5 px-5 flex justify-between items-center border-b-2  '>
      <p className='text-lg '>Filter</p>
      <p className='text-sm font-semibold text-red-500 cursor-pointer' onClick={handleReset}>RESET</p>
    </div>
    <div className='sm:hidden flex fixed bottom-0 h-14 bg-white shadow-2xl border-t w-full justify-between items-center'>
      <div className="sort w-1/2 flex justify-center items-center">

        <p className='text-base font-semibold text-black' onClick={() => setIsfilterShow("hidden")}>Cancel</p>
      </div>
      <div className="sort w-1/2 flex justify-center items-center">
        <p className='text-base font-semibold text-red-500' onClick={()=>setIsfilterShow("hidden")}>Apply</p>
      </div>
    </div>
   {/* price here */}
   <FilterByPrice setPrice={setPrice} resetValue={resetValue}/>
   {/* sleeves */}
   <FilterBySleeves setIsSleeves={setIsSleeves} resetValue={resetValue}/>
   {/* colors */}
   <FilterByColor colors={colors} resetValue={resetValue} setColor={setColor}/>
  </div>
  )
}

export default Sidebar