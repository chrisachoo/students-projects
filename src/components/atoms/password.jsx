import { BiShow, BiHide } from 'react-icons/bi'

const Password = ({ label, type, placeholder, name, value, onChange, required, disabled, pattern, title, onClick }) => {
  return (
    <div className='grid-display'>
      <label>{label}</label>
      <div className='password-input'>
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
        <button onClick={onClick}>{!onClick ? <BiShow /> : <BiHide />}</button>
      </div>
    </div>
  )
}

export default Password