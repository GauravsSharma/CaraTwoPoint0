import React from 'react'
import Input from '../input/Input'

const FilterByPrice = ({setPrice,resetValue,selectedValue,setSelectedValue}) => {
  return (
    <div className='p-5 border-b-2 flex justify-center items-start flex-col gap-1 form'>
    <p className='text-base text-slate-500 font-semibold relative'>Price</p>
   <Input lable={"All ranges"} id={"all"} name={"price"}  resetValue={resetValue} onChange={setPrice} value={null}/>
   <Input lable={"₹00.00-₹499.00"} id={"600"} name={"price"}  resetValue={resetValue} onChange={setPrice} value={"0-499"} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
   <Input lable={"₹499.99-₹999.00"} id={"800"} name={"price"}  resetValue={resetValue} onChange={setPrice} value={"499-999"} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
   <Input lable={"₹999.00-above"} id={"700"} name={"price"} resetValue={resetValue} onChange={setPrice} value={"999-2999"} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
  </div>
  )
}

export default FilterByPrice