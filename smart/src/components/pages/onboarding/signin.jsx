import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSignin } from '../../hooks/useSignin'
import { InputForm, SecondaryButton, RemeberMe, SubText } from '../../index'
import shopping from '../../../images/shopping.jpg'
import './onboarding.css'

const SignIn = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { signin, error, isLoading } = useSignin()

  const handleFormChange = (event) => {
    const updatedForm = { ...form }
    updatedForm[event.target.name] = event.target.value;

    setForm(updatedForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { email, password } = form
    await signin(email, password)
  }

  return (
    <div className='section__padding'>
      <div className='container'>
        <div className='container__form'>
          <div className='container__form-text'>
            <h2>Welcome back</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>

          {error && <div className='error'>{error}</div>}

          <form onSubmit={handleSubmit}>
            <InputForm
              label={`Email`}
              type={`email`}
              name={`email`}
              value={form.email}
              onChange={handleFormChange}
              placeholder={`Enter your email`}
            />

            <InputForm
              label={`Password`}
              type={`password`}
              name={`password`}
              value={form.password}
              onChange={handleFormChange}
              placeholder={`Enter password`}
            />

            <RemeberMe />
            <SecondaryButton
              type="submit"
              label={`Sign in`}
              disabled={isLoading}
            />

            <SubText
              text={`Don't have an account?`}
              linkText={`Sign up for free`}
              onClick={() => navigate(location.pathname = '/signup')}
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

export default SignIn