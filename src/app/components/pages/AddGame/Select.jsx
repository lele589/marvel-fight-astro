const Select = ({ label, options, defaultOption }) => {
    return(
        <div className="my-4">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select className="select select-bordered w-full">
                {defaultOption && <option>{defaultOption}</option>}
                {options.map(option => (
                    <option key={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select