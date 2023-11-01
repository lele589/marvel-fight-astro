import{ useState } from 'react'

const Select = ({ label, options, defaultOption, onChange }) => {

    const [selectedValue, setSelectedValue] = useState(defaultOption);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
        onChange(selectedOption);
      };

    return(
        <div className="my-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select className="select select-bordered w-full" onChange={handleSelectChange} value={selectedValue}>
                {defaultOption && <option>{defaultOption}</option>}
                {options.map(option => (
                    <option key={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select