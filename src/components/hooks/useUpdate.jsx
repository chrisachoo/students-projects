import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const useUpdate = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const _url = 'https://e-mall-backend.herokuapp.com'

  const updateUser = async (first_name, last_name, email, cellno, token) => {
    setIsLoading(true)
    setError(null)

    console.log(`firstName: ${first_name}, lastName: ${last_name}, email: ${email}, cellno: ${cellno}, token: ${token}`)

    const response = await fetch(`${_url}/user/update-profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name, last_name, email, cellno, token })
    }).catch((err) => {
      console.log(err)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      Swal.fire(
        'Error',
        json.error,
        'error'
      )
    }

    if (response.ok) {
      setIsLoading(false)
      Swal.fire(
        'Good job!',
        'Updated successfully!',
        'success'
      )

      const newUser = await JSON.parse(sessionStorage.getItem('user'))
      newUser.first_name = first_name,
        newUser.last_name = last_name,
        newUser.cellno = cellno

      sessionStorage.setItem('user', JSON.stringify(newUser))
      console.log('response', JSON.stringify(json))
    }
  }

  return { updateUser, isLoading, error }
}