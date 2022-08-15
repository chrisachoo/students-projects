import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { useNavigate, useLocation } from 'react-router-dom'
import { InputForm, SecondaryButton } from '../../index'
import shopping from '../../../images/shopping.jpg'
import './onboarding.css'

const SignUp = () => {

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

    let { first_name, last_name, cellno, email, password } = form

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
              <InputForm
                label={`First Name`}
                type={`text`}
                name={`firstName`}
                value={form.first_name}
                onChange={handleFormChange}
                placeholder={`First Name`}
              />

              <InputForm
                label={`Last Name`}
                type={`text`}
                name={`lastName`}
                value={form.last_name}
                onChange={handleFormChange}
                placeholder={`Last Name`}
              />
            </div>

            <InputForm
              label={`Email`}
              type={`email`}
              name={`email`}
              value={form.email}
              onChange={handleFormChange}
              placeholder={`Enter your email`}
            />

            <InputForm
            label={`Cell Number`}
            type={`text`}
            name={`Cell Number`}
            value={form.cellno}
            onChange={handleFormChange}
            placeholder={`Cell Number`}
          />


            <InputForm
              label={`Password`}
              type={`password`}
              name={`password`}
              value={form.password}
              onChange={handleFormChange}
              placeholder={`Enter password`}
            />

            <SecondaryButton
              type='submit'
              label={`Sign up`}
              disabled={isLoading}
            />

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