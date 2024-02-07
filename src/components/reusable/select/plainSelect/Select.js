import React, { useState } from "react";
import "./_Select.scss";

function Select() {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <select
        className="Select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {/* Default option */}
        <option value="">English (United States)</option>
        {/* Other options */}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p>Selected option: {selectedOption}</p>}
    </div>
  );
}

export default Select;
