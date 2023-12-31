import React, { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleResetButtonClick = () => {
    // Reset the selected value to null or any default value
    setSelectedValue(null);
  };

  const handleRadioButtonChange = (event) => {
    // Update the selected value when a radio button is selected
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* Radio buttons */}
      <input
        type="radio"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleRadioButtonChange}
      />
      <label>Option 1</label>

      <input
        type="radio"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleRadioButtonChange}
      />
      <label>Option 2</label>

      <input
        type="radio"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleRadioButtonChange}
      />
      <label>Option 3</label>

      {/* Reset button */}
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
};

export default RadioButtonGroup;
