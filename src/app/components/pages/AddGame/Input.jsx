const Input = ({ label, placeholder }) => {
  return(
    <div className="my-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="text" placeholder={placeholder} className="input input-bordered w-full" />
    </div>
  )
} 

export default Input