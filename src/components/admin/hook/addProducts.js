import { useState } from 'react'

export const saveProductsDeatils = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const _url = 'https://e-mall-backend.herokuapp.com'

  const upload = async (file) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/upload/upload-docs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file })
    }).catch((err) => {
      console.log(err)
    })
    const url = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(url.error)
    }

    if (response.ok) {
      setIsLoading(false)
      return url
    }
  }

  const saveProducts = async (name, description, price, quantity, category_id, picture_url) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/upload/upload-docs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file })
    }).catch((err) => {
      console.log(err)
    })

    if (!response.ok) {
      setIsLoading(false)
      setError(response.error)
    }

    if (response.ok) {
      setIsLoading(false)
      return response
    }
  }

  return { upload, isLoading, error }
}