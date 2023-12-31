import React, { useEffect, useState } from 'react'
import Input from './input/Input';
import FilterByPrice from './filtercomponents/FilterByPrice';
import FilterBySleeves from './filtercomponents/FilterBySleeves';
import FilterByColr from './filtercomponents/FilterByColor';
import FilterByColor from './filtercomponents/FilterByColor';
import RadioButtonGrp from './input/RadioButtonGrp';

const Sidebar = ({ setPrice, setColor, setIsSleeves, price, isSleeves, setIsSort, colors, isFilterShow, setIsfilterShow,color }) => {

  const [resetValue, setResetValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleReset = () => {
    setPrice(null)
    setColor(null)
    setIsSleeves(null);
    setResetValue(Date.now());
    setSelectedValue(null);
    
  }
  const arr = colors.map((c)=>{
    return {
      label:c,
      value:c
    }
  })
  // console.log(arr);
  const handleResetButtonClick = () => {
    // Reset the selected value to null or any default value
    setIsSleeves(null);
    setPrice(null);
    setColor(null)
  };
  return (
    <div className={`filter ${isFilterShow} min-h-screen bg-white z-50 fixed top-0 sm:relative sm:z-0 md:block w-full duration-1000 sm:w-1/5 border border-1`}>
      <div className='py-5 px-5 flex justify-between items-center border-b-2  '>
        <p className='text-lg '>Filter</p>
        <p type='reset' className='text-sm font-semibold text-red-500 cursor-pointer' onClick={handleResetButtonClick}>RESET</p>
      </div>
      <div className='sm:hidden flex fixed bottom-0 h-14 bg-white shadow-2xl border-t w-full justify-between items-center'>
        <div className="sort w-1/2 flex justify-center items-center">
          <p className='text-base font-semibold text-black' onClick={() => setIsfilterShow("hidden")}>Cancel</p>
        </div>
        <div className="sort w-1/2 flex justify-center items-center">
          <p className='text-base font-semibold text-red-500' onClick={() => setIsfilterShow("hidden")}>Apply</p>
        </div>
      </div>
      <div className='p-5 border-b-2'>
        <h1 className='font-semibold text-lg text-slate-500'>Price</h1>
        <RadioButtonGrp
          groupName="price"
          options={[
            { label: '$0.00-$499.00', value: '0-499' },
            { label: '$499.00-999.00', value: '499-999' },
            { label: '999.00-above', value: '999-5000' },
          ]}
          selectedValue={price}
          setSelectedValue={setPrice}
        />
      </div>

      <div className='p-5 border-b-2'>
      <h1 className='font-semibold text-lg text-slate-500'>Sleeves</h1>
        <RadioButtonGrp
          groupName="sleeves"
          options={[
            { label: 'Full Sleeves', value: 'full Sleeves' },
            { label: 'Half Sleeves', value: 'half Sleeves' },
          ]}
          selectedValue={isSleeves}
          setSelectedValue={setIsSleeves}
        />
      </div>
      <div className='p-5 border-b-2'>
      <h1 className='font-semibold text-lg text-slate-500'>Colors</h1>
        <RadioButtonGrp
          groupName="colors"
          options={arr}
          selectedValue={color}
          setSelectedValue={setColor}
        />
      </div>
      
    </div>
  )
}

export default Sidebar