import React, { useEffect, useState } from 'react'

const Input = ({lable,id,name,onChange,value,color="white",resetValue,selectedValue,setSelectedValue}) => {
 const handleClick = (e) => {
  console.log("newvalue",newValue);
  onChange(e.target.value);
  setSelectedValue(e.target.value) // Move the onChange call outside the state updater
  console.log("selected is", selected);
  };

  useEffect(() => { 
  }, [resetValue]);
  return (
    <label 
    htmlFor={id} 
    className='text-slate-500  block cursor-pointer pl-7  relative'
    >
    <input 
    type="radio" 
    name={name} 
    id={id} 
    className='text-red-500 hidden'
    onChange={handleClick}
    checked={selectedValue===value}
    value={value}
    />
    <div 
    
    className={`circle h-5 w-5 mr-2 inline-block absolute top-0 left-0 rounded-full border-2
    `} style={{backgroundColor:color}}></div>
    <span 
    className='inline-block duration-500 text-slate-500'>{lable}</span>
  </label>
  )
}

export default Input 