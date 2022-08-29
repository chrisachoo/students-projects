import React, { useEffect, useState } from 'react'
import { useShop } from '../../hooks/useShop'
import { useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Button, Loader } from '../../'
import './onboarding.css'

const LandingPage = ({ data }) => {

  const navigate = useNavigate()
  const [category, setCategory] = useState()
  const [shops, setShops] = useState()
  const [loading, setLoading] = useState(false)
  const { getAllCategory, getProducts, getMallShops } = useShop()

  // GET ALL THE CATEGORY LIST
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategory()
      setCategory(categoryList)
    }

    fetchCategories().catch(console.error)
  }, [])

  // GET PRODUCTS OF SELECTED CATEGORY
  const getSelectedCategory = async (event) => {
    setLoading(true)
    const found = await category.find(({ name }) => name === event.currentTarget.textContent)
    const prod = await getProducts(found.id)

    setLoading(false)
    if (prod.length > 0) {
      navigate('/products', { state: prod })
    }
  }

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const handleOnSelect = async (item) => {
    // GET SHOPS OF SELECTED MALL
    const response = await getMallShops(item.id)
    if (response.length > 0) {
      console.log('mall shops: ', response)
      setShops(response)
    }
  }

  return (
    <section className='section__padding onboarding'>
      {loading ? <Loader /> : null}
      <h2>Welcome!</h2>
      <p>Please, choose one of the options below to start shopping</p>
      <div className='onboarding__content'>
        <div className='onboarding__content-category'>
          <h4>Shop by department</h4>
          <li onClick={getSelectedCategory}><p>Electronics</p></li>
          <li onClick={getSelectedCategory}><p>Home and Kitchen</p></li>
          <li onClick={getSelectedCategory}><p>Beauty and personal care</p></li>
          <li onClick={getSelectedCategory}><p>Fashion</p></li>
          <li onClick={getSelectedCategory}><p>Sports and Outdoors</p></li>
          <li onClick={getSelectedCategory}><p>Toys and Games</p></li>
          <li onClick={getSelectedCategory}><p>Office and Stationery</p></li>
        </div>
        <div className='onboarding__devider'><hr /><p>Or</p><hr /></div>
        <div className='onboarding__content-options'>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            placeholder={`Search for malls`}
            showIcon={false}
            styling={{
              border: '1px solid #1A3365',
              hoverBackgroundColor: 'none',
              borderRadius: '5px',
              padding: '.5em 1em',
              display: 'flex', alignItems: 'center',
              clearIconMargin: '.5em 1em',
              zIndex: '20'
            }}
          />

          <ReactSearchAutocomplete
            items={shops}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            placeholder={`Search for shops`}
            showIcon={false}
            styling={{
              border: '1px solid #1A3365',
              hoverBackgroundColor: 'none',
              borderRadius: '5px',
              padding: '.5em 1em',
              display: 'flex', alignItems: 'center',
              clearIconMargin: '.5em 1em',
              zIndex: '1'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPage