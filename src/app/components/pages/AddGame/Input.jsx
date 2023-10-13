const Input = ({ label, placeholder }) => {
  return(
    <div class="my-4">
      <label class="label">
        <span class="label-text">{label}</span>
      </label>
      <input type="text" placeholder={placeholder} class="input input-bordered w-full" />
    </div>
  )
} 

export default Input