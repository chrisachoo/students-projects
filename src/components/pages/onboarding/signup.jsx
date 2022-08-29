import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { useNavigate, useLocation } from 'react-router-dom'
import { Input, Button } from '../../index'
import shopping from '../../../images/4944667.jpg'
import './onboarding.css'

const SignUp = () => {

  let location = useLocation()
  let navigate = useNavigate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    cellno: '',
    email: '',
    usertype: 'shopper',
    password: ''
  })

  const { signup, isLoading, error } = useSignup()

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let { first_name, last_name, cellno, email, usertype, password } = form

    console.log(`firstName: ${first_name}, lastName: ${last_name}, cellno: ${cellno}, email: ${email}, usertype: ${usertype}, password: ${password}`)
    await signup(first_name, last_name, email, cellno, usertype, password)
  }

  return (
    <div className='section__padding'>
      <div className='container'>
        <div className='container__form'>
          <div className='container__form-text'>
            <p className='welcome-text'>start for free</p>
            <h2>Create new account</h2>
            <span className='redirect-text'>Already have an account? <i onClick={() => navigate(location.pathname = '/signin')}>SignIn</i></span>
          </div>

          {error && <div className='error'>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className='inline__input'>
              <Input
                label={`First Name`}
                type={`text`}
                name={`first_name`}
                value={form.first_name}
                onChange={handleFormChange}
                placeholder={`First Name`}
                required={true}
                pattern={`[a-zA-Z]*`}
                title={`Only letters (a-z, A-Z)`}
              />

              <Input
                label={`Last Name`}
                type={`text`}
                name={`last_name`}
                value={form.last_name}
                onChange={handleFormChange}
                placeholder={`Last Name`}
                required={true}
                pattern={`[a-zA-Z]*`}
                title={`Only letters (a-z, A-Z)`}
              />
            </div>

            <Input
              label={`Email`}
              type={`email`}
              name={`email`}
              value={form.email}
              required={true}
              onChange={handleFormChange}
              placeholder={`Enter your email`}
            />

            <Input
              label={`Cell Number`}
              type={`text`}
              name={`cellno`}
              value={form.cellno}
              onChange={handleFormChange}
              required={true}
              placeholder={`Cell Number`}
              pattern={`[0-9]*`}
            />


            <Input
              label={`Password`}
              type={`password`}
              name={`password`}
              value={form.password}
              onChange={handleFormChange}
              placeholder={`Enter password`}
              required={true}
            />
            
            <div className='padding'>
              <Button
                type='submit'
                label={`Sign up`}
                width={`100%`}
                disabled={isLoading}
              />
            </div>

          </form>
        </div>
        <div className='container__right'>
          <img src={shopping} />
        </div>
      </div>
    </div>
  );
};

export default SignUp