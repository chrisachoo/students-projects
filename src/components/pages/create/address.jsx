import { useFormik } from 'formik'
import { Button, Input } from '../../'
import './create.css'

const Address = () => {

  const validate = values => {
    const errors = {}
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if (!values.recipient_name) {
      errors.recipient_name = `Please enter the recipient's name`
    }

    if (!values.recipient_phone_number) {
      errors.recipient_phone_number = `Please enter a 10-digit SA phone number without country code, spaces, or special characters`
    } else if (!phoneno.test(values.recipient_phone_number)) {
      errors.recipient_phone_number = `Please enter a valid SA phone number`
    }

    if (!values.street_address) {
      errors.street_address = `Please enter the street address`
    }

    if (!values.suburb) {
      errors.suburb = `Please enter the suburb`
    }

    if (!values.city) {
      errors.city = `Please enter the city`
    }

    if (!values.province) {
      errors.province = `Please enter a province`
    }

    if (!values.postal_code) {
      errors.postal_code = `Please enter a postal code`
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      recipient_name: '',
      recipient_phone_number: '',
      street_address: '',
      suburb: '',
      city: '',
      province: '',
      postal_code: ''
    }, validate, onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div className='section__padding address'>
      <h4>Add New Address</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className='grid-display'>
          <label>Recipient Name</label>
          <input type='text'
            name='recipient_name'
            placeholder='Recipient Name'
            onChange={formik.handleChange}
            value={formik.values.recipient_name}
          />
          {formik.errors.recipient_name ? <div className='error'>{formik.errors.recipient_name}</div> : null}
        </div>

        <div className='grid-display'>
          <label>Recipient Phone Number</label>
          <input type='text'
            name='recipient_phone_number'
            placeholder='Recipient Phone Number'
            onChange={formik.handleChange}
            value={formik.values.recipient_phone_number}
          />
          {formik.errors.recipient_phone_number ? <div className='error'>{formik.errors.recipient_phone_number}</div> : null}
        </div>

        <div className='grid-display'>
          <label>Street Address</label>
          <input type='text'
            name='street_address'
            placeholder='Street Address'
            onChange={formik.handleChange}
            value={formik.values.street_address}
          />
          {formik.errors.street_address ? <div className='error'>{formik.errors.street_address}</div> : null}
        </div>

        <div className='grid-display'>
          <label>Suburb</label>
          <input type='text'
            name='suburb'
            placeholder='Suburb'
            onChange={formik.handleChange}
            value={formik.values.suburb}
          />
          {formik.errors.suburb ? <div className='error'>{formik.errors.suburb}</div> : null}
        </div>

        <div className='grid-display'>
          <label>City</label>
          <input type='text'
            name='city'
            placeholder='City / Town'
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.errors.city ? <div className='error'>{formik.errors.city}</div> : null}
        </div>
        <div className='input-select'>
          <label htmlFor='province-select'>Province</label>
          <select name='province' id='province-select'
            onChange={formik.handleChange} value={formik.values.province}>
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
          {formik.errors.province ? <div className='error'>{formik.errors.province}</div> : null}
        </div>

        <div style={{marginTop: '1em', display: 'flex', flexDirection: 'row', gap: '1em', justifyContent: 'right'}}>
          <button className='btn btn-secondary' type='submit'>Cancel</button>
          <Button label={`Save`} type='submit'/>
        </div>
      </form>
    </div>
  )
}

export default Address;