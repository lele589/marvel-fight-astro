import{ useState, useEffect } from 'react'

const Select = ({ label, options, onChange, value }) => {

    const [selectedOption, setSelectedOption] = useState(value || {});

    const handleSelectChange = (event) => {
        const selectedOption = options.find(option => option.name === event.target.value);    
        setSelectedOption(selectedOption);    
        onChange(selectedOption);
      };

    useEffect(() => {
        onChange(selectedOption);
    }, []);  

    return(
        <div className="my-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select className="select select-bordered w-full" onChange={handleSelectChange} value={selectedOption.name}>
                {options.map(option => (
                    <option key={`${option.id}-${option.name}`}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select