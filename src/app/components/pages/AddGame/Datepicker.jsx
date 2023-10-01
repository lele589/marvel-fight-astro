const Datepicker = ({ label, placeholder }) => {
  return(
    <div class="my-4">
      <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">{label}</span>
          </label>
          <input type="text" placeholder={placeholder} class="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  )
}

export default Datepicker