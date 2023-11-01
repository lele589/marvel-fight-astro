import { useState } from 'react';

const Input = ({ label, placeholder, onChange }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  }

  return(
    <div className="my-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="text" placeholder={placeholder} className="input input-bordered w-full" onChange={handleInputChange} value={inputValue} />
    </div>
  )
} 

export default Input