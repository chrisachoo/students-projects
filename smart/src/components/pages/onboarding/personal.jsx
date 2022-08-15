import { useState, useNavigate, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Input } from '../../index'

const Personal = () => {

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    cellno: '',
    email: '',
    token: ''
  })
  useEffect(() => {
    const fetchUser = async () => {
      const user = await JSON.parse(localStorage.getItem('user'))
      if (user) { 
        setForm({
          first_name: user.first_name,
          last_name: user.last_name,
          cellno: user.cellno,
          email: user.email,
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
    event.preventDefault();

    console.log(form)
  }

  return (
    <div className='section__padding'>
      <h4>Personal Details</h4>

      <Input
        label={`First Name`}
        type={`text`}
        name={`first_name`}
        value={form.first_name}
        onChange={handleFormChange}
        defaultValue={form.first_name}
        placeholder={`First Name`}
      />

      <Input
        label={`Last Name`}
        type={`text`}
        name={`last_name`}
        value={form.last_name}
        onChange={handleFormChange}
        defaultValue={form.last_name}
        placeholder={`First Name`}
      />

      <Input
        label={`Contact Number`}
        type={`text`}
        name={`cellno`}
        value={form.cellno}
        onChange={handleFormChange}
        defaultValue={form.cellno}
        placeholder={`First Name`}
      />

      <Input
        label={`Email`}
        type={`email`}
        name={`email`}
        value={form.email}
        onChange={handleFormChange}
        defaultValue={form.email}
        placeholder={`First Name`}
      />
      <div className='group__content'>
        <button className='btn btn-primary'>Cancel</button>
        <button className='btn btn-secondary' onClick={() => console.log('form: ', form)}>Save</button>
      </div>
    </div>
  )
}

export default Personal