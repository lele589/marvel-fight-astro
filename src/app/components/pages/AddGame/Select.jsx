import{ useState, useEffect } from 'react'

const Select = ({ label, options, defaultOption, onChange }) => {

    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;    
        setSelectedOption(selectedOption);    
        onChange(selectedOption);
      };

    useEffect(() => {
        onChange(defaultOption);
    }, []);  

    return(
        <div className="my-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select className="select select-bordered w-full" onChange={handleSelectChange} value={selectedOption}>
                {options.map(option => (
                    <option key={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select