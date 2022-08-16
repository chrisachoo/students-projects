import { useState } from 'react'

export const useUpdate = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const _url = 'https://e-mall-backend.herokuapp.com'

  const updateUser = async (first_name, last_name, email, cellno, token) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/user/update-profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name, last_name, email, cellno, token })
    }).catch((err)=> {
      console.log(err)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      setIsLoading(false)
      console.log('response', JSON.stringify(json))
    }
  }

  return { updateUser, isLoading, error }
}