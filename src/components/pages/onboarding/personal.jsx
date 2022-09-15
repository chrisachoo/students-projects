import { useState, useNavigate, useEffect } from 'react'
import { useUpdate } from '../../hooks/useUpdate'
import { Button, Input, Loader } from '../../index'
import Swal from 'sweetalert2'

const Personal = () => {

  const { updateUser, isLoading } = useUpdate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    cellno: '',
    token: ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      const user = await JSON.parse(sessionStorage.getItem('user'))
      if (user) {
        setForm({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          cellno: user.cellno,
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

    let { first_name, last_name, email, cellno, token } = form
    await updateUser(first_name, last_name, email, cellno, token)
  }

  return (
    <div className='personal'>
      {isLoading ? <Loader /> : null}
      <h4>Personal Details</h4>

      <form onSubmit={handleSubmit}>
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
          disabled={true}
        />
        <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'row', gap: '1em', justifyContent: 'right' }}>
          <button className='btn btn-secondary'>Cancel</button>
          <Button label={`Save`} type='submit' />
        </div>
      </form>
    </div>
  )
}

export default Personal