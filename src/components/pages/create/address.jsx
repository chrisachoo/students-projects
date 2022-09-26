import { useState } from 'react'
import { useAddress } from '../../hooks/useAddress'
import { Button, Input, Loader } from '../../'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import './create.css'

const Address = () => {

  const { addAddress, isLoading } = useAddress()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    address_type: '',
    street_address: '',
    suburb: '',
    city_or_town: '',
    province: '',
    postal_code: ''
  })


  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let { address_type, street_address, suburb, city_or_town, province, postal_code } = form
    await addAddress(address_type, street_address, suburb, city_or_town, province, postal_code)
  }

  const cancel = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to leave the page, your changes will be lost.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, leave page!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    })
  }

  return (
    <div className='address'>
      {isLoading ? <Loader /> : null}
      <h4>Add New Address</h4>
      <form onSubmit={handleSubmit}>
        <div className='radio-button' >
          <label>
            <input type='radio' name='address_type' value='Residential' checked={form.address_type === 'Residential'} onChange={handleFormChange} />
            Residential
          </label>
          <label>
            <input type='radio' name='address_type' value='Business' checked={form.address_type === 'Residential'} onChange={handleFormChange} />
            Business
          </label>
        </div>
        <Input
          label={`Street Address`}
          type={`text`}
          name={`street_address`}
          value={form.street_address}
          onChange={handleFormChange}
          placeholder={`Eg. 12 Ridge Street`}
          required={true}
        />

        <Input
          label={`Suburb`}
          type={`text`}
          name={`suburb`}
          value={form.suburb}
          onChange={handleFormChange}
          placeholder={`suburb`}
          required={true}
        />

        <Input
          label={`City / Towm`}
          type={`text`}
          name={`city_or_town`}
          value={form.city_or_town}
          onChange={handleFormChange}
          placeholder={`Eg. Pretoria`}
          required={true}
        />

        <div className='input-select'>
          <label htmlFor='province-select'>Province</label>
          <select name='province' id='province-select'
            onChange={handleFormChange} value={form.province}>
            <option value=''>--Please choose a province--</option>
            <option value='Eastern Cape'>Eastern Cape</option>
            <option value='Free State'>Free State</option>
            <option value='Gauteng'>Gauteng</option>
            <option value='KwaZule-Natal'>KwaZule-Natal</option>
            <option value='Limpopo'>Limpopo</option>
            <option value='Mpumalanga'>Mpumalanga</option>
            <option value='Nothern Cape'>Nothern Cape</option>
            <option value='North West'>North West</option>
            <option value='Western Cape'>Western Cape</option>
          </select>
        </div>

        <Input
          label={`Postal Code`}
          type={`number`}
          name={`postal_code`}
          value={form.postal_code}
          onChange={handleFormChange}
          placeholder={`Postal Code`}
          required={true}
        />

        <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'row', gap: '1em', justifyContent: 'right' }}>
          <div className='btn btn-secondary' onClick={cancel}>Cancel</div>
          <Button label={`Save`} type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Address;