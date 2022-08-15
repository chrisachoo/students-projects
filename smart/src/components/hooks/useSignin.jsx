import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignin = () => {
  let navigate = useNavigate()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const _url = 'https://e-mall-backend.herokuapp.com'

  const signin = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).catch((err)=> {
      console.log(err)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type: 'SIGNIN', payload: json})
      setIsLoading(false)
      navigate('/profile')
    }
  }

  return { signin, isLoading, error }
}