import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMdCart } from 'react-icons/io'
import { useCart } from 'react-use-cart'
import './lists.css'

const Detail = () => {

  const { state } = useLocation()
  console.log('response: ', state)
  const name = state.name.split('.')[0]
  const { addItem } = useCart()
  const numberFormatter = Intl.NumberFormat('en-US')

  const renderText = state.price >= 350 ? 'Free Delivery Available' : 'Eligible for Cash on Delivery'

  return (
    <section className='section__padding product-details'>
      <div className='detail'>
        <div className='detail__picture'>
          <img src={state.picture_url} />
        </div>
        <div className='detail__content'>
          <h2>{state.description}</h2>
          <p>{name}</p>

          <div className='detail__actions'>
            <li>Eligible for next-day delivery or collection</li>
            <li>{renderText}</li>
          </div>

          <div className='detail-card'>
            <h1>R {numberFormatter.format(state.price)}</h1>

            <div className='grid-column'>
              <button className='btn btn-primary' onClick={() => addItem(state)}>
                <IoMdCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail