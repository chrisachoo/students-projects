import { useState } from 'react'

export const useShop = () => {

    const [loading, setIsLoading] = useState(null)
    const _url = 'https://e-mall-backend.herokuapp.com'

    const getAllCategory = async () => {

        const response = await fetch(`${_url}/category/get-all-categories`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).catch((err) => {
            console.log(err)
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(false)
            return json
        }
    }

    const getProducts = async (_id) => {
        const response = await fetch(`${_url}/product/get-products/${_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).catch((err) => {
            console.log(err)
        })
        const products = await response.json()

        if (!response.ok) {
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(false)
            return products
        }
    }

    return { getAllCategory, getProducts }
}