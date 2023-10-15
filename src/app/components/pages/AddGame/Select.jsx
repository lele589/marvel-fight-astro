const Select = ({ label, options, defaultOption }) => {
    return(
        <div class="my-4">
            <label class="label">
                <span class="label-text">{label}</span>
            </label>
            <select class="select select-bordered w-full">
                {defaultOption && <option>{defaultOption}</option>}
                {options.map(option => (
                    <option key={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select