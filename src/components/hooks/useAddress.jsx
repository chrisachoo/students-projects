import { useState } from 'react'

export const useAddress = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const _url = 'https://e-mall-backend.herokuapp.com'

  const addAddress = async (address_type, street_address, suburb, city_or_town, province, postal_code, token) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${_url}/address/add-address`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address_type, street_address, suburb, city_or_town, province, postal_code, token })
    }).catch((err) => {
      console.log(err)
    })

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      setIsLoading(false)
    }
  }

  return { addAddress, isLoading, error }
}