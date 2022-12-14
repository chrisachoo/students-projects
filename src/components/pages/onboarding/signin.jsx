import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSignin } from '../../hooks/useSignin'
import { Input, Button, Loader, Password, SubText } from '../../'
import shopping from '../../../images/dribble.jpg'
import './onboarding.css'

const SignIn = () => {

  let navigate = useNavigate()
  let location = useLocation()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

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

  const forgotPassword = () => {
    navigate('/reset-password')
  }

  return (
    <div className='section__padding container'>
      {isLoading ? <Loader /> : null}
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

          <Password
            label={`Password`}
            type={passwordShown ? 'text' : 'password'}
            name={`password`}
            value={form.password}
            onChange={handleFormChange}
            placeholder={`Enter password`}
            required={true}
            onClick={togglePassword}
          />

          <div className='forgot-password'>
            <p onClick={forgotPassword}>forgot password</p>
          </div>

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