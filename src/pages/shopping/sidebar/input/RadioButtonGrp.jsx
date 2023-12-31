import React,{useState} from 'react'

const RadioButtonGrp = ({ groupName, options,setSelectedValue ,selectedValue}) => {
   
  
      const handleRadioButtonChange = (event) => {
        // Update the selected value when a radio button is selected
        setSelectedValue(event.target.value);
      };
  return (
    <div>
    {/* Radio buttons */}
    {options.map((option) => (
      <div key={option.value} className='py-1'>
        <input
          type="radio"
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleRadioButtonChange}
          name={groupName}
          id={option.value}
        />
        <label htmlFor={option.value} className='text-slate-500 ml-2 cursor-pointer'>{option.label}</label>
      </div>
    ))}

    {/* Reset button */}
  </div>
  )
}

export default RadioButtonGrp