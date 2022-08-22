import { Link } from 'react-router-dom'
import './onboarding.css'

const LandingPage = () => {
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
        <div className='onboarding__content-options'></div>
      </div>
      <div className='onboarding__highlights'></div>
    </section>
  )
}

export default LandingPage