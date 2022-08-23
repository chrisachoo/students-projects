import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Card } from '../../'
import testImage from '../../../images/f1.jpg'
import testImage1 from '../../../images/f2.jpg'
import testImage2 from '../../../images/f3.jpg'
import './onboarding.css'

const LandingPage = ({ data }) => {

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    console.log('mall name: ', item.name)
  }

  return (
    <section className='section__padding onboarding'>
      <h2>Welcome!</h2>
      <p>Please, choose one of the options below to start shopping</p>
      <div className='onboarding__content'>
        <div className='onboarding__content-category'>
          <h4>Shop by department</h4>
          <li><p>Electronics</p></li>
          <li><p>Home and Kitchen</p></li>
          <li><p>Beauty and personal care</p></li>
          <li><p>Sports and Outdoors</p></li>
          <li><p>Toys and Games</p></li>
          <li><p>Office and Stationery</p></li>
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
              zIndex: '100'
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