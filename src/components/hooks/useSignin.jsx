import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

export const useSignin = () => {
  let navigate = useNavigate()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const { user } = useAuthContext()
  const _url = 'https://e-mall-backend.herokuapp.com'

  const getAllUsers = async () => {
    setIsLoading(true)
    setError(null)
    const token = user.token
    console.log('check token', token)

    const response = await fetch(`${_url}/user/get-all/${token}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => {
      console.log(err)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      setIsLoading(false)
      return json
    }
  }

  const signin = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).catch((err) => {
      console.log(err)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      sessionStorage.setItem('user', JSON.stringify(json))
      dispatch({ type: 'SIGNIN', payload: json })


      const token = json.token
      const decode = jwt_decode(token)
      const userObject = JSON.parse(decode.user_details)

      if (userObject.usertype === 'shopper') {
        setIsLoading(false)
        navigate('/')
      }
      else {
        const allusers = await getAllUsers()
        setIsLoading(false)
        console.log('check all users: ', allusers)
        navigate('/admin/dashboard', { state: allusers })
      }
    }
  }

  return { signin, isLoading, error }
}