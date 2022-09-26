import React from 'react'
import { useCart } from 'react-use-cart'
import { ImBin } from 'react-icons/im'
import { checkout } from '../../hooks/useCheckout'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem
  } = useCart()

  const { checkUser } = checkout()

  let price = 0
  for (let j = 0; j < items.length; j++) {
    price = price + items[j].price
  }

  const numberFormatter = Intl.NumberFormat('en-US')
  const formatted = numberFormatter.format(price)

  const handlePass = async () => {
    await checkUser()
  }

  if (isEmpty) return <div className='section__padding'><p>Your cart is empty</p></div>

  return (
    <div className='section__padding'>
      <div className='section-devider'>
        <div>
          <ul className='cart-items'>
            {items.map((item) => (
              <div className='cart-item-card' key={item.id}>
                <div className='cart-image'>
                  <img src={item.picture_url} alt='image' />
                </div>
                <div className='content-wrapp'>
                  <div className='cart-content'>
                    <h2>{item.name.split('.')[0]}</h2>
                    <p>{item.description}</p>
                    <p className='price'>R <span>{item.price}</span></p>
                  </div>
                  <li style={{ marginTop: '10px' }}>
                    <button className='btn btn-secondary' onClick={() => removeItem(item.id)}><ImBin /></button>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className='checkout-container'>
          <h4>Cart Summary</h4>
          <div className='items-price'>
            <p>Total: <span>({totalUniqueItems} items)</span></p>
            <h2>R {formatted}</h2>
          </div>
          <button className='btn btn-primary' onClick={handlePass}>Proceed to Checkout</button>
        </div>
      </div>
      <p className='sub-text'>
        Placing an item in your shopping cart does not reserve that item or price. We only reserve stock for your order once payment is received.
      </p>
    </div>
  )
}

export default Cart