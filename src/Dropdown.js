// import React, {useState} from 'react';
// function Dropdown(){
//     const[selectedValue,setSelectedValue]=useState('');
//     const handleDropdownChange=(event)=>{
//         setSelectedValue(event.target.value);
//     };
//     return(
//         <div>
//         <label>Select an Option:</label>
//         <select value={selectedValue} onChange={handleDropdownChange}>
//         <option value="option 1">Option 1</option>
//         <option value="option 1">Option 1</option>
//         <option value="option 1">Option 1</option>
//         </select>
//         <p>Selected option:{selectedValue}</p>
//         </div>
//     );
// }
// export default Dropdown;
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'grape', label: 'Grape' },
  // Add more options as needed
];

function SearchableDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h1>Searchable Dropdown Example</h1>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true} // Enable search functionality
        placeholder="Select an option..."
      />
      {selectedOption && (
        <div>
          <p>Selected Option: {selectedOption.label}</p>
        </div>
      )}
    </div>
  );
}

export default SearchableDropdown;