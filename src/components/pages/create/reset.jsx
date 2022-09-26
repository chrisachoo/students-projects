import { useSignin } from '../../hooks/useSignin'
import { Button, Input, Loader } from '../../'
import { useState } from 'react'

const Reset = () => {

  const { resetPasswords, isLoading } = useSignin()
  const [form, setForm] = useState({
    email: ''
  })

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value;

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await resetPasswords(form.email)
  }

  return (
    <div className='section__padding reset'>
      {isLoading ? <Loader /> : null}
      <div className='reset-box'>
        <div className='reset-box__text'>
          <h2>Password assistance</h2>
          <p>Enter the email address associated with your Sharp Witted account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label={`Email`}
            type={`email`}
            name={`email`}
            value={form.email}
            required={true}
            onChange={handleFormChange}
            placeholder={`Enter your email`}
          />
          <Button
            type='submit'
            label={`Continue`}
            width={`100%`}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  )
}

export default Reset