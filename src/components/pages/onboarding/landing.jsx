import React, { useEffect, useState } from 'react'
import { useShop } from '../../hooks/useShop'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Card } from '../../'
import testImage from '../../../images/f1.jpg'
import testImage1 from '../../../images/f2.jpg'
import testImage2 from '../../../images/f3.jpg'
import './onboarding.css'

const LandingPage = ({ data }) => {

  const [selectedCategory, setSelectedCategory] = useState()
  const [category, setCategory] = useState()
  const [products, setProducts] = useState()
  const { getAllCategory, getProducts } = useShop()

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const categories = await getAllCategory()
  //     setCategory(categories)
  //   }

  //   fetchCategories().catch(console.error)
  // }, [])

  console.log('check state: ', category)

  const getSelectedCategory = async (event) => {
    console.log(event.currentTarget.textContent)
    let _id

    if (event.currentTarget.textContent === 'Electronics') {
      _id = 9
      console.log(_id)

    } else if (event.currentTarget.textContent === 'Home and Kitchen') {
      _id = 10
      console.log(_id)

    } else if (event.currentTarget.textContent === 'Beauty and personal care') {
      _id = 11
      console.log(_id)

    } else if (event.currentTarget.textContent === 'Fashion') {
      _id = 12
      console.log(_id)

    } else if (event.currentTarget.textContent === 'Sports and Outdoors') {
      _id = 13
      console.log(_id)

    } else if (event.currentTarget.textContent === 'Toys and Games') {
      _id = 14
      console.log(_id)

    } else {
      _id = 15
      console.log(_id)
    }

    const prod = await getProducts(_id)
    console.log('prod: ', prod)

    
  }

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    console.log('mall name: ', item.name)
    console.log('mall id: ', item.id)
  }



  return (
    <section className='section__padding onboarding'>
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
            items={data}
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
      <div className='onboarding__highlights'>
        <h2>Deals On All Your Favorites</h2>
        <div className='onboarding__highlights-shop'>
          <Card path={testImage}
            description={`Men Notch Collar Colorblock Shirt`}
            price={`250`}
          />
          <Card path={testImage1}
            description={`Men Notch Collar Colorblock Shirt`}
            price={`250`}
          />
          <Card path={testImage2}
            description={`Men Notch Collar Colorblock Shirt`}
            price={`250`}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPage