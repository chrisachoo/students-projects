import { useState } from 'react'

export const useShop = () => {

  const [isLoading, setIsLoading] = useState(null)
  const _url = 'https://e-mall-backend.herokuapp.com'

  const getAllCategory = async () => {

    const response = await fetch(`${_url}/category/get-all-categories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => {
      console.log(err)
    })
    const json = await response.json()
    console.log(json)

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

  const getMallShops = async (_id) => {
    const response = await fetch(`${_url}/shop/get-shops-for-a-mall/${_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => {
      console.log(err)
    })
    const shops = await response.json()

    if (!response.ok) {
      setIsLoading(false)
    }

    if (response.ok) {
      setIsLoading(false)
      return shops
    }
  }

  const shopProducts = async (shop_id) => {
    const response = await fetch(`${_url}/product/get-products-for-shop/${shop_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => {
      console.log(err)
    })
    const shopProducts = await response.json()

    if (!response.ok) {
      setIsLoading(false)
    }

    if (response.ok) {
      setIsLoading(false)
      return shopProducts
    }
  }

  const shopCategory = async () => {
    const response = await fetch(`${_url}/product/get-products-for-shop/${shop_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => {
      console.log(err)
    })
    const category = await response.json()

    if (!response.ok) {
      setIsLoading(false)
    }

    if (response.ok) {
      setIsLoading(false)
      return category
    }
  }

  return { getAllCategory, getProducts, getMallShops, shopProducts, isLoading }
}