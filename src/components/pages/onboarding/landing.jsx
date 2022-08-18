import { Link } from 'react-router-dom'
import './onboarding.css'
import stock_image from '../../../images/clothing.jpg'

const LandingPage = () => {
  return (
    <section className='section__padding'>
      <div className='landing'>
        <div className='landing__left'>
          <div className='landing__left-one'>
            <h4>shop by department</h4>
            <p><Link to='#'>Electronics</Link></p>
            <p><Link to='#'>Home and Kitchen</Link></p>
            <p><Link to='#'>Beauty and personal care</Link></p>
            <p><Link to='#'>Fashion</Link></p>
            <p><Link to='#'>Sports and Outdoors</Link></p>
            <p><Link to='#'>Toys and Games</Link></p>
            <p><Link to='#'>Office and Stationery</Link></p>
          </div>
        </div>
        <div className='landing__right'>
          <div className='landing__right-filter'>
            <div className='landing__right-container'>
              <label for="pet-select">Select mall to shop to:</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Soshanguve Crossing Mall</option>
                <option value="cat">Menlyn Park Shopping Centre</option>
                <option value="hamster">Fourways Mall</option>
                <option value="parrot">Sandton City Mall</option>
                <option value="spider">Mall Of Africa</option>
                <option value="goldfish">Gateway Theatre Of Shopping</option>
              </select>
            </div>

            <div className='landing__right-container'>
              <label for="pet-select">Select store:</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Game</option>
                <option value="cat">Shopright</option>
                <option value="hamster">Incredible Connection</option>
                <option value="parrot">Micro</option>
                <option value="spider">Edgars</option>
                <option value="goldfish">Markham</option>
                <option value="goldfish">Mr Price</option>
                <option value="goldfish">Pick 'n Pay</option>
                <option value="goldfish">Sportscene</option>
                <option value="goldfish">Truworths</option>
                <option value="goldfish">Woolworths</option>
                <option value="goldfish">H&M Home</option>
              </select>
            </div>

            <div className='landing__right-container'>
              <label for="pet-select">Select store:</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Game</option>
                <option value="cat">Shopright</option>
                <option value="hamster">Incredible Connection</option>
                <option value="parrot">Micro</option>
                <option value="spider">Edgars</option>
                <option value="goldfish">Markham</option>
                <option value="goldfish">Mr Price</option>
                <option value="goldfish">Pick 'n Pay</option>
                <option value="goldfish">Sportscene</option>
                <option value="goldfish">Truworths</option>
                <option value="goldfish">Woolworths</option>
                <option value="goldfish">H&M Home</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='landing__right-card'>
        <div className='card-content'>
          <h5>ALOT For Less</h5>
          <div className='card-image'>
            <img src={stock_image} />
          </div>
          <p><Link to='#'>Shop now</Link></p>
        </div>
        <div className='card-content'>
          <h5>Computers & Accessories</h5>
          <div className='card-image'>
            <img src={stock_image} />
          </div>
          <p><Link to='#'>Shop now</Link></p>
        </div>
        <div className='card-content'>
          <h5>Deals & Promotions</h5>
          <div className='card-image'>
            <img src={stock_image} />
          </div>
          <p><Link to='#'>Shop now</Link></p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage