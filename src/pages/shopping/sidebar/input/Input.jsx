import React, { useEffect, useState } from 'react'

const Input = ({lable,id,name,onChange,value=null,color="white",resetValue}) => {
  const [selected,setSelected] = useState(false);
 const handleClick = () => {
    const newValue = selected ? null : value;
    console.log(newValue);
    setSelected(!selected);
    console.log("selected is",selected);
    onChange(value);
  };

  useEffect(() => { 
    setSelected(false);
  }, [resetValue]);
  return (
    <label 
    htmlFor={id} 
    className='text-slate-500  block cursor-pointer pl-7  relative'
    onClick={handleClick}
    >
    <input 
    type="radio" 
    name={name} 
    value={value}
    id={id} 
    className='text-red-500 hidden'
    checked={true}
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