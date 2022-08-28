import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSignin } from '../../hooks/useSignin'
import { Input, Button, RemeberMe, SubText } from '../../index'
import { Rings } from 'react-loader-spinner'
import shopping from '../../../images/dribble.jpg'
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

    let { email: username, password } = form
    await signin(username, password).catch(err => { console.log("Error", err) })
  }

  return (
    <div className='section__padding container'>
      <div className='container__form'>
        <div className='container__form-text'>
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>

        {error && <div className='error'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <Input
            label={`Email`}
            type={`email`}
            name={`email`}
            value={form.email}
            onChange={handleFormChange}
            placeholder={`Enter your email`}
            required={true}
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
              type="submit"
              label={`Sign in`}
              width={`100%`}
              disabled={isLoading}
            />
          </div>

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
  );
};

export default SignIn