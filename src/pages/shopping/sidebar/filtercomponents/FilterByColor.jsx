import React from 'react'
import Input from '../input/Input'
const FilterByColor = ({colors,resetValue,setColor,selectedValue,setSelectedValue}) => {
  return (
    <div className='p-5 border-b-2 flex justify-center items-start flex-col gap-1 form'>
    <p className='text-base text-slate-500 font-semibold relative'>Colors</p>
    <Input resetValue={resetValue} lable={"All colors"} id={Math.random()} name={"color"} onChange={setColor} value={null}/>
    {
      colors?.map((color,idx)=><Input key={idx} color={color} resetValue={resetValue} lable={color} id={Math.random()}selectedValue={selectedValue} name={"color"} onChange={setColor} value={color} setSelectedValue={setSelectedValue}/>)
    }
  </div>
  )
}

export default FilterByColor