import { useState, useEffect } from 'react'
import { useAddress } from '../../hooks/useAddress'
import { Button, Input } from '../../'
import './create.css'

const Address = () => {

  const { addAddress, error, isLoading } = useAddress()
  const [form, setForm] = useState({
    address_type: '',
    street_address: '',
    suburb: '',
    city_or_town: '',
    province: '',
    postal_code: ''
  })

  const [userToken, getUserToken] = useState({
    user_id: '',
    token: ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      const user = await JSON.parse(sessionStorage.getItem('user'))
      if (user) {
        getUserToken({
          token: user.token
        })
      }
    }

    fetchUser().catch(console.error)
  }, [])

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let { token } = userToken
    let { address_type, street_address, suburb, city_or_town, province, postal_code } = form
    await addAddress(address_type, street_address, suburb, city_or_town, province, postal_code, token)
  }

  return (
    <div className='address'>
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
          <button className='btn btn-secondary'>Cancel</button>
          <Button label={`Save`} type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Address;