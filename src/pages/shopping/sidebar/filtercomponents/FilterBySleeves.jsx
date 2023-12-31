import React from 'react'
import Input from '../input/Input'
const FilterBySleeves = ({resetValue,setIsSleeves,selectedValue,setSelectedValue}) => {
  return (
    <div className='p-5 border-b-2 flex justify-center items-start flex-col gap-1 form'>
      <p className='text-base text-slate-500 font-semibold relative'>Sleeves</p>

     <Input lable={"All Sleeves"} id={Math.random()} name={"sleeves"} resetValue={resetValue} onChange={setIsSleeves} value={null} selectedValue={selectedValue}  setSelectedValue={setSelectedValue} />
     <Input lable={"Half Sleeves"} id={"half"} name={"sleeves"} resetValue={resetValue} onChange={setIsSleeves} value={"half"} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
     <Input lable={"Full Sleeves"} id={"full"} name={"sleeves"} resetValue={resetValue} onChange={setIsSleeves} value={"full"} selectedValue={selectedValue}  setSelectedValue={setSelectedValue} />
    </div>
  )
}

export default FilterBySleeves