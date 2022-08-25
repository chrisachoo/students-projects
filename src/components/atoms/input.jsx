const FormInput = ({label, type, placeholder, name, value, onChange, required, disabled, pattern, title, hint }) => {
  return (
    <div className='grid-display'>
        <label>{label}</label>
        <input className='invalid' 
          type={type} 
          placeholder={placeholder} 
          name={name} value={value} 
          onChange={onChange} 
          required={required}
          disabled={disabled}
          pattern={pattern}
          title={title}
          />
    </div>
  )
}

export default FormInput