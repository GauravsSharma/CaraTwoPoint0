import React, { useState } from 'react'

const Input = ({isReadOnly,handleOnChange,label,type="text"}) => {
    const [input,setInput] = useState("");
    const handleChange =(e)=>{
     setInput(e.target.value);
     handleOnChange(label,e.target.value);
    }
  return (
    <>
       <input type={type} value={input} onChange={handleChange} className={`py-2 text-xl  outline-none bg-white border rounded-md mt-2  text-slate-700  w-auto`} readOnly={isReadOnly}/>
    </>
  )
}

export default Input